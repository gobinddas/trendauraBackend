import React, { useState } from 'react'
import { products, categories, subcategories } from '../components/data/dummydata'

const getCategoryName = (catValue) => {
  const cat = categories.find(c => c.value === catValue || c.id === catValue || c.name === catValue)
  return cat ? cat.name : catValue
}

const getSubcategoryName = (subValue) => {
  const sub = subcategories.find(s => s.value === subValue || s.id === subValue || s.name === subValue)
  return sub ? sub.name : subValue
}

const ProductManagement = () => {
  const [previewProduct, setPreviewProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('')

  // Get unique categories from products
  const uniqueCategories = Array.from(new Set(products.map(p => p.category)))

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
            className="border px-3 py-2 rounded w-full"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat}>
                {getCategoryName(cat)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products
          .filter(p => !selectedCategory || p.category === selectedCategory)
          .slice(0, 16)
          .map(product => (
            <div key={product.id} className="bg-white rounded shadow p-4 flex flex-col">
              <div className="relative group mb-3">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition text-white opacity-0 group-hover:opacity-100 rounded"
                  onClick={() => setPreviewProduct(product)}
                >
                  Preview
                </button>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="text-sm text-gray-500 mb-1">
                  {getCategoryName(product.category)} / {getSubcategoryName(product.subcategory)}
                </div>
                <div className="font-bold text-blue-600 mb-1">
                  ₹{product.discountPrice || product.price}
                  {product.discountPrice && (
                    <span className="text-gray-400 line-through ml-2 text-sm">₹{product.price}</span>
                  )}
                </div>
                <div className="text-xs text-gray-400">Brand: {product.brand}</div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button className="px-3 py-1 rounded border bg-white hover:bg-gray-100">Prev</button>
        <button className="px-3 py-1 rounded border bg-blue-600 text-white">1</button>
        <button className="px-3 py-1 rounded border bg-white hover:bg-gray-100">2</button>
        <button className="px-3 py-1 rounded border bg-white hover:bg-gray-100">Next</button>
      </div>

      {/* Preview Modal */}
      {previewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={() => setPreviewProduct(null)}
              aria-label="Close preview"
            >
              ×
            </button>
            {/* All Images */}
            <div className="flex gap-2 mb-4">
              <img
                src={previewProduct.mainImage}
                alt={previewProduct.name}
                className="w-40 h-40 object-cover rounded border"
              />
              <div className="flex flex-col gap-2">
                {previewProduct.secondaryImages && previewProduct.secondaryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${previewProduct.name} ${idx + 1}`}
                    className="w-20 h-20 object-cover rounded border"
                  />
                ))}
              </div>
            </div>
            {/* All Details */}
            <h2 className="text-2xl font-bold mb-2">{previewProduct.name}</h2>
            <div className="mb-2 text-gray-600">
              <span className="font-semibold">Category:</span> {getCategoryName(previewProduct.category)} / {getSubcategoryName(previewProduct.subcategory)}
            </div>
            <div className="mb-2">{previewProduct.description}</div>
            <div className="mb-2 font-bold text-blue-600">
              ₹{previewProduct.discountPrice || previewProduct.price}
              {previewProduct.discountPrice && (
                <span className="text-gray-400 line-through ml-2 text-sm">₹{previewProduct.price}</span>
              )}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Sizes:</span> {previewProduct.sizes?.join(', ')}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Colors:</span> {previewProduct.colors?.join(', ')}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Brand:</span> {previewProduct.brand}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Material:</span> {previewProduct.material}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Stock:</span>{" "}
              {previewProduct.stock && Object.entries(previewProduct.stock).map(([size, qty]) => (
                <span key={size} className="mr-2">{size}: {qty}</span>
              ))}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Rating:</span> {previewProduct.rating} ({previewProduct.numReviews} reviews)
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Featured:</span> {previewProduct.isFeatured ? "Yes" : "No"}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Tags:</span> {previewProduct.tags?.join(', ')}
            </div>
            <div className="mb-2 text-xs text-gray-400">
              <span className="font-semibold">Created:</span> {new Date(previewProduct.createdAt).toLocaleString()}
            </div>
            <div className="mb-2 text-xs text-gray-400">
              <span className="font-semibold">Updated:</span> {new Date(previewProduct.updatedAt).toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductManagement