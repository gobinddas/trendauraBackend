export const products = [
  {
    id: "p1",
    name: "Classic Black Hoodie",
    slug: "classic-black-hoodie",
    description: "A cozy, comfortable black hoodie made from premium cotton.",
    categoryId: 2, // Women
    subcategoryId: 4, // Hoodies
    price: 3000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    mainImage: "/banner1.jpg",
    secondaryImages: ["/banner2.jpg", "/banner3.jpg"],
    stock: { S: 10, M: 5, L: 0, XL: 3 },
    material: "100% Cotton",
    brand: "UrbanStyle",
    rating: 4.6,
    numReviews: 38,
    isFeatured: true,
    tags: ["hoodie", "winter", "cotton", "urban"],
    createdAt: "2025-06-27T10:00:00Z",
    updatedAt: "2025-06-27T12:00:00Z"
  },
  {
    id: "p2",
    name: "Urban Blue Jeans",
    slug: "urban-blue-jeans",
    description: "Trendy blue jeans for everyday wear.",
    categoryId: 1, // Men
    subcategoryId: 1, // Jeans
    price: 3500,
    discountPrice: 3200,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    mainImage: "/banner2.jpg",
    secondaryImages: ["/banner1.jpg", "/banner3.jpg"],
    stock: { S: 8, M: 6, L: 2, XL: 4 },
    material: "Denim",
    brand: "UrbanStyle",
    rating: 4.7,
    numReviews: 22,
    isFeatured: false,
    tags: ["jeans", "denim", "urban"],
    createdAt: "2025-06-27T10:10:00Z",
    updatedAt: "2025-06-27T12:10:00Z"
  },
  {
    id: "p3",
    name: "White Cotton T-Shirt",
    slug: "white-cotton-tshirt",
    description: "A premium white t-shirt for a clean, classic look.",
    categoryId: 2, // Women
    subcategoryId: 5, // T-Shirts (Women)
    price: 1200,
    discountPrice: 1000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    mainImage: "/banner3.jpg",
    secondaryImages: ["/banner2.jpg", "/banner4.jpg"],
    stock: { S: 7, M: 3, L: 1, XL: 2 },
    material: "100% Cotton",
    brand: "UrbanStyle",
    rating: 4.8,
    numReviews: 15,
    isFeatured: true,
    tags: ["tshirt", "white", "cotton"],
    createdAt: "2025-06-27T10:20:00Z",
    updatedAt: "2025-06-27T12:20:00Z"
  },
  {
    id: "p4",
    name: "Slim Fit Jacket",
    slug: "slim-fit-jacket",
    description: "A stylish slim fit jacket for cool evenings.",
    categoryId: 1, // Men
    subcategoryId: 2, // Jackets
    price: 4200,
    discountPrice: 3900,
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy"],
    mainImage: "/banner4.jpg",
    secondaryImages: ["/banner3.jpg", "/banner5.jpg"],
    stock: { M: 9, L: 4, XL: 2 },
    material: "Polyester",
    brand: "UrbanStyle",
    rating: 4.5,
    numReviews: 18,
    isFeatured: false,
    tags: ["jacket", "slim", "fit"],
    createdAt: "2025-06-27T10:30:00Z",
    updatedAt: "2025-06-27T12:30:00Z"
  },
  {
    id: "p5",
    name: "Summer Shorts",
    slug: "summer-shorts",
    description: "Lightweight shorts perfect for summer.",
    categoryId: 1, // Men
    subcategoryId: 3, // Shorts
    price: 1800,
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Blue"],
    mainImage: "/banner5.jpg",
    secondaryImages: ["/banner4.jpg", "/banner6.jpg"],
    stock: { S: 5, M: 2, L: 0 },
    material: "Cotton",
    brand: "UrbanStyle",
    rating: 4.9,
    numReviews: 25,
    isFeatured: true,
    tags: ["shorts", "summer", "cotton"],
    createdAt: "2025-06-27T10:40:00Z",
    updatedAt: "2025-06-27T12:40:00Z"
  },
  {
    id: "p12",
    name: "Graphic T-Shirt",
    slug: "graphic-tshirt",
    description: "A cool graphic t-shirt for everyday style.",
    categoryId: 3, // Unisex
    subcategoryId: 6, // T-Shirts (Unisex)
    price: 1500,
    discountPrice: 1200,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    mainImage: "/banner4.jpg",
    secondaryImages: ["/banner3.jpg", "/banner5.jpg"],
    stock: { S: 7, M: 3, L: 1, XL: 2 },
    material: "Cotton",
    brand: "UrbanStyle",
    rating: 4.8,
    numReviews: 15,
    isFeatured: true,
    tags: ["tshirt", "graphic", "cool"],
    createdAt: "2025-06-27T11:50:00Z",
    updatedAt: "2025-06-27T13:50:00Z"
  }
];


export const users = [
  {
    id: 'u1',
    name: 'Gobind Das',
    phone: '9812345678',
    email: 'gobind@example.com',
    address: 'Kathmandu, Nepal'
  },
  {
    id: 'u2',
    name: 'Ram Bdr',
    phone: '9808765432',
    email: 'ram@example.com',
    address: 'Pokhara, Nepal'
  },
  {
    id: 'u3',
    name: 'Sita Rai',
    phone: '9811122233',
    email: 'sita@example.com',
    address: 'Lalitpur, Nepal'
  },
  {
    id: 'u4',
    name: 'Kiran Thapa',
    phone: '9809988776',
    email: 'kiran@example.com',
    address: 'Butwal, Nepal'
  },
  {
    id: 'u5',
    name: 'Nita Shrestha',
    phone: '9815566778',
    email: 'nita@example.com',
    address: 'Biratnagar, Nepal'
  }
];
export const orders = [
  {
    id: "ORD001",
    customerId: "u1",
    productId: "p1", // Classic Black Hoodie
    size: "M",
    color: "Black",
    quantity: 1,
    amount: 3000,
    status: "Pending",
    date: "2025-06-28T12:00:00Z"
  },
  {
    id: "ORD002",
    customerId: "u2",
    productId: "p3", // White Cotton T-Shirt
    size: "L",
    color: "White",
    quantity: 2,
    amount: 2000, // 1000 * 2 (discountPrice used)
    status: "Delivered",
    date: "2025-06-27T14:00:00Z"
  },
  {
    id: "ORD003",
    customerId: "u3",
    productId: "p2", // Urban Blue Jeans
    size: "M",
    color: "Blue",
    quantity: 1,
    amount: 3200, // discountPrice
    status: "Delivered",
    date: "2025-06-27T16:30:00Z"
  },
  {
    id: "ORD004",
    customerId: "u4",
    productId: "p2",
    size: "L",
    color: "Black",
    quantity: 2,
    amount: 6400, // 3200 * 2
    status: "Pending",
    date: "2025-06-28T08:30:00Z"
  },
  {
    id: "ORD005",
    customerId: "u5",
    productId: "p4", // Slim Fit Jacket
    size: "XL",
    color: "Navy",
    quantity: 1,
    amount: 3900,
    status: "Shipped",
    date: "2025-06-28T09:10:00Z"
  },
  {
    id: "ORD006",
    customerId: "u2",
    productId: "p5", // Summer Shorts
    size: "S",
    color: "Beige",
    quantity: 1,
    amount: 1800,
    status: "Delivered",
    date: "2025-06-29T10:00:00Z"
  },
  {
    id: "ORD007",
    customerId: "u1",
    productId: "p3", // White Cotton T-Shirt
    size: "M",
    color: "White",
    quantity: 1,
    amount: 1000,
    status: "Delivered",
    date: "2025-06-29T13:20:00Z"
  },
  {
    id: "ORD008",
    customerId: "u4",
    productId: "p1", // Classic Black Hoodie
    size: "XL",
    color: "Gray",
    quantity: 1,
    amount: 3000,
    status: "Shipped",
    date: "2025-06-30T08:00:00Z"
  },
  {
    id: "ORD009",
    customerId: "u3",
    productId: "p12", // Graphic T-Shirt
    size: "S",
    color: "Black",
    quantity: 3,
    amount: 3600, // 1200 * 3
    status: "Pending",
    date: "2025-06-30T10:45:00Z"
  },
  {
    id: "ORD010",
    customerId: "u5",
    productId: "p12", // Graphic T-Shirt
    size: "M",
    color: "White",
    quantity: 1,
    amount: 1200,
    status: "Delivered",
    date: "2025-06-30T12:30:00Z"
  }
];



export const categories = [
  { id: 1, name: "Men" },
  { id: 2, name: "Women" },
  { id: 3, name: "Unisex" }
];

export const subcategories = [
  { id: 1, name: "Jeans", categoryId: 1 },
  { id: 2, name: "Jackets", categoryId: 1 },
  { id: 3, name: "Shorts", categoryId: 1 },
  { id: 4, name: "Hoodies", categoryId: 2 },
  { id: 5, name: "T-Shirts", categoryId: 2 },
  { id: 6, name: "T-Shirts", categoryId: 3 }
];