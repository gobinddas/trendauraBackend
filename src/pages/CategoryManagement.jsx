import React, { useState } from "react";
import {
  categories as initialCategories,
  subcategories as initialSubcategories,
  products
} from "../components/data/dummydata";

const CategoryManagement = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [subcategories, setSubcategories] = useState(initialSubcategories);
  const [newCategory, setNewCategory] = useState("");
  const [newSubcategory, setNewSubcategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;
    const newId = categories.length + 1;
    setCategories([...categories, { id: newId, name: newCategory }]);
    setNewCategory("");
  };

  const handleAddSubcategory = (e) => {
    e.preventDefault();
    if (!newSubcategory.trim() || !selectedCategoryId) return;
    const newId = subcategories.length + 1;
    setSubcategories([
      ...subcategories,
      {
        id: newId,
        name: newSubcategory,
        categoryId: Number(selectedCategoryId)
      }
    ]);
    setNewSubcategory("");
    setSelectedCategoryId("");
  };

  const handleDeleteCategory = (id) => {
    const hasProducts = products.some((p) => p.categoryId === id);
    const hasSubProduct = subcategories
      .filter((s) => s.categoryId === id)
      .some((s) => products.some((p) => p.subcategoryId === s.id));

    if (hasProducts || hasSubProduct) {
      alert("Cannot delete: Category or its subcategories have products.");
      return;
    }

    setCategories(categories.filter((c) => c.id !== id));
    setSubcategories(subcategories.filter((sub) => sub.categoryId !== id));
  };

  const handleDeleteSubcategory = (id) => {
    const hasProducts = products.some((p) => p.subcategoryId === id);
    if (hasProducts) {
      alert("Cannot delete: Subcategory has products.");
      return;
    }
    setSubcategories(subcategories.filter((s) => s.id !== id));
  };

  const getProductCountBySubcategory = (subId) =>
    products.filter((p) => p.subcategoryId === subId).length;

  const getTotalProductCountInCategory = (category) => {
    const subIds = subcategories
      .filter((s) => s.categoryId === category.id)
      .map((s) => s.id);

    const matchingProducts = products.filter(
      (p) => p.categoryId === category.id || subIds.includes(p.subcategoryId)
    );

    const uniqueIds = new Set(matchingProducts.map((p) => p.id));
    return uniqueIds.size;
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Category Management</h1>

      {/* Add Category */}
      <form
        onSubmit={handleAddCategory}
        className="bg-white p-4 rounded shadow space-y-3"
      >
        <h2 className="text-lg font-semibold">Add Category</h2>
        <div className="flex gap-3">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter category name"
            className="border rounded px-3 py-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </form>

      {/* Add Subcategory */}
      <form
        onSubmit={handleAddSubcategory}
        className="bg-white p-4 rounded shadow space-y-3"
      >
        <h2 className="text-lg font-semibold">Add Subcategory</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={newSubcategory}
            onChange={(e) => setNewSubcategory(e.target.value)}
            placeholder="Enter subcategory name"
            className="border rounded px-3 py-2 w-full"
          />
          <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
            className="border rounded px-3 py-2 w-full md:w-1/3"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </form>

      {/* Display Categories & Subcategories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Categories */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="flex justify-between items-center border-b pb-1"
              >
                <span>
                  {cat.name} ({getTotalProductCountInCategory(cat)} products)
                </span>
                <button
                  onClick={() => handleDeleteCategory(cat.id)}
                  className="text-red-600 hover:underline text-xs"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Subcategories */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Subcategories</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {subcategories.map((sub) => {
              const parent = categories.find((c) => c.id === sub.categoryId);
              return (
                <li
                  key={sub.id}
                  className="flex justify-between items-center border-b pb-1"
                >
                  <span>
                    {sub.name} ({getProductCountBySubcategory(sub.id)} products)
                    <span className="text-gray-400 text-xs ml-2">
                      in {parent?.name || "Unknown"}
                    </span>
                  </span>
                  <button
                    onClick={() => handleDeleteSubcategory(sub.id)}
                    className="text-red-600 hover:underline text-xs"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
