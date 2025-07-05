// import React, { useState, useEffect } from 'react';
// import { categories, subcategories } from './data/dummydata';

// const initialProduct = {
//   id: '',
//   name: '',
//   slug: '',
//   description: '',
//   categoryId: '',
//   subcategoryId: '',
//   price: '',
//   sizes: [],
//   colors: [],
//   mainImage: '',
//   secondaryImages: [],
//   stock: {},
//   material: '',
//   brand: '',
//   rating: '',
//   numReviews: '',
//   isFeatured: false,
//   tags: [],
//   createdAt: '',
//   updatedAt: ''
// };

// const sizeOptions = ['S', 'M', 'L', 'XL'];

// const ProductModal = ({
//   open,
//   onClose,
//   onSave,
//   editProduct
// }) => {
//   const [product, setProduct] = useState(initialProduct);

//   useEffect(() => {
//     if (editProduct) {
//       setProduct(editProduct);
//     } else {
//       setProduct(initialProduct);
//     }
//   }, [editProduct, open]);

//   if (!open) return null;

//   const handleArrayChange = (field, value) => {
//     setProduct(prev => ({
//       ...prev,
//       [field]: value.split(',').map(v => v.trim())
//     }));
//   };

//   const handleStockChange = (size, value) => {
//     setProduct(prev => ({
//       ...prev,
//       stock: { ...prev.stock, [size]: Number(value) }
//     }));
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//       <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-8 overflow-y-auto max-h-[90vh]">
//         {/* Cross Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
//           aria-label="Close modal"
//           type="button"
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold mb-6 text-center">{editProduct ? 'Edit Product' : 'Add Product'}</h2>
//         <form
//           onSubmit={e => {
//             e.preventDefault();
//             onSave(product);
//           }}
//           className="flex flex-col gap-4"
//         >
//           <input className="border rounded px-3 py-2" placeholder="ID" value={product.id} onChange={e => setProduct({ ...product, id: e.target.value })} required />
//           <input className="border rounded px-3 py-2" placeholder="Name" value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} required />
//           <input className="border rounded px-3 py-2" placeholder="Slug" value={product.slug} onChange={e => setProduct({ ...product, slug: e.target.value })} required />
//           <textarea className="border rounded px-3 py-2" placeholder="Description" value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} required />
//           <select className="border rounded px-3 py-2" value={product.categoryId} onChange={e => setProduct({ ...product, categoryId: Number(e.target.value), subcategoryId: '' })} required>
//             <option value="">Select Category</option>
//             {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
//           </select>
//           <select className="border rounded px-3 py-2" value={product.subcategoryId} onChange={e => setProduct({ ...product, subcategoryId: Number(e.target.value) })} required>
//             <option value="">Select Subcategory</option>
//             {subcategories.filter(sub => sub.categoryId === Number(product.categoryId)).map(sub => (
//               <option key={sub.id} value={sub.id}>{sub.name}</option>
//             ))}
//           </select>
//           <input className="border rounded px-3 py-2" type="number" placeholder="Price" value={product.price} onChange={e => setProduct({ ...product, price: Number(e.target.value) })} required />
//           <input className="border rounded px-3 py-2" placeholder="Sizes (comma separated)" value={product.sizes.join(', ')} onChange={e => handleArrayChange('sizes', e.target.value)} />
//           <input className="border rounded px-3 py-2" placeholder="Colors (comma separated)" value={product.colors.join(', ')} onChange={e => handleArrayChange('colors', e.target.value)} />
//           <input className="border rounded px-3 py-2" placeholder="Main Image URL" value={product.mainImage} onChange={e => setProduct({ ...product, mainImage: e.target.value })} />
//           <input className="border rounded px-3 py-2" placeholder="Secondary Images (comma separated)" value={product.secondaryImages.join(', ')} onChange={e => handleArrayChange('secondaryImages', e.target.value)} />
//           <div>
//             <label className="block font-medium mb-1">Stock:</label>
//             <div className="flex gap-2">
//               {sizeOptions.map(size => (
//                 <input
//                   key={size}
//                   type="number"
//                   min={0}
//                   placeholder={size}
//                   value={product.stock[size] || ''}
//                   onChange={e => handleStockChange(size, e.target.value)}
//                   className="border rounded px-2 py-1 w-16"
//                 />
//               ))}
//             </div>
//           </div>
//           <input className="border rounded px-3 py-2" placeholder="Material" value={product.material} onChange={e => setProduct({ ...product, material: e.target.value })} />
//           <input className="border rounded px-3 py-2" placeholder="Brand" value={product.brand} onChange={e => setProduct({ ...product, brand: e.target.value })} />
//           <input className="border rounded px-3 py-2" type="number" step="0.1" placeholder="Rating" value={product.rating} onChange={e => setProduct({ ...product, rating: Number(e.target.value) })} />
//           <input className="border rounded px-3 py-2" type="number" placeholder="Number of Reviews" value={product.numReviews} onChange={e => setProduct({ ...product, numReviews: Number(e.target.value) })} />
//           <label className="flex items-center gap-2">
//             <input type="checkbox" checked={product.isFeatured} onChange={e => setProduct({ ...product, isFeatured: e.target.checked })} />
//             Featured
//           </label>
//           <input className="border rounded px-3 py-2" placeholder="Tags (comma separated)" value={product.tags.join(', ')} onChange={e => handleArrayChange('tags', e.target.value)} />
//           <input className="border rounded px-3 py-2" type="datetime-local" placeholder="Created At" value={product.createdAt ? product.createdAt.slice(0, 16) : ''} onChange={e => setProduct({ ...product, createdAt: e.target.value })} />
//           <input className="border rounded px-3 py-2" type="datetime-local" placeholder="Updated At" value={product.updatedAt ? product.updatedAt.slice(0, 16) : ''} onChange={e => setProduct({ ...product, updatedAt: e.target.value })} />
//           <button type="submit" className="bg-blue-600 text-white rounded py-2 mt-2 hover:bg-blue-700 transition">{editProduct ? 'Update' : 'Add'} Product</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;