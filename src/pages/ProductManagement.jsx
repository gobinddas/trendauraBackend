import React, { useState } from "react";
import {
  products,
  categories,
  subcategories,
} from "../components/data/dummydata";

const ProductManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsperPage = 4;

  const filteredProducts = products.filter(
    (p) => !selectedCategory || p.categoryId === Number(selectedCategory)
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsperPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsperPage,
    currentPage *itemsperPage
  );

  const getCategoryName = (id) => {
    const cat = categories.find((item) => item.id === id);
    return cat.name;
  };

  const getSubcategoryName = (id) => {
    const subCat = subcategories.find((item) => item.id === id);
    return subCat.name;
  };

  console.log(selectedCategory);
  return (
    <div className="p-6">
      {/* Top Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Add Product Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 w-full md:w-auto">
          + Add Product
        </button>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search product..."
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />
        {/* Category Filter */}
        <div className="flex gap-2 w-full md:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="">All Categories</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow p-4 flex flex-col"
          >
            <div className="relative group mb-3">
              <img
                src={item.mainImage}
                alt="name"
                className="h-40 w-full object-cover rounded"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition text-white opacity-0 group-hover:opacity-100 rounded">
                Preview
              </button>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <div className="text-sm text-gray-500 mb-1">
                {getCategoryName(item.categoryId)}/{" "}
                {getSubcategoryName(item.subcategoryId)}
              </div>
              <div className="font-bold text-blue-600 mb-1">
                {item.price}
                <span className="text-gray-400 line-through ml-2 text-sm">
                  {item.discountPrice}
                </span>
              </div>
              <div className="text-xs text-gray-400">Brand: {item.brand}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button  key={i} onClick={()=> setCurrentPage(i + 1)}    className={`px-3 py-1 rounded border ${
        currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"
      }`}>
            {i + 1}
          </button>
        ))}

        <button 
        onClick={()=> setCurrentPage((prev)=> Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border bg-white hover:bg-gray-100">
          Next
        </button>
      </div>

      {/* Preview Modal */}

      {/* <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative overflow-y-auto max-h-[90vh]">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
            aria-label="Close preview"
          >
            ×
          </button>
          <div className="flex gap-2 mb-4">
            <img
              src="./banner1.jpg"
              alt="main image"
              className="w-40 h-40 object-cover rounded border"
            />
            <div className="flex flex-col gap-2">
              <img
                src="./banner1.jpg"
                alt="other images"
                className="w-20 h-20 object-cover rounded border"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Black Hoodie</h2>
          <div className="mb-2 text-gray-600">
            <span className="font-semibold">Category:</span> Men / Hoodie
          </div>
          <div className="mb-2">Good authenticated product</div>
          <div className="mb-2 font-bold text-blue-600">
            ₹1800
            <span className="text-gray-400 line-through ml-2 text-sm">
              ₹700
            </span>
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Sizes:</span> l
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Colors:</span> Black
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Brand:</span> Nike
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Material:</span> Cotton
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Stock:</span>{" "}
            <span className="mr-2">Medium: 8</span>
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Rating:</span> % star rating 15
            review
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Featured:</span> Yes
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Tags:</span> Nike, new trending
          </div>
          <div className="mb-2 text-xs text-gray-400">
            <span className="font-semibold">Created:</span> 2089/ 60/ 88
          </div>
          <div className="mb-2 text-xs text-gray-400">
            <span className="font-semibold">Updated:</span> 5555/88/09
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductManagement;
