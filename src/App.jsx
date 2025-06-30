import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Dashboard from "./pages/Dashboard"
import ProductManagement from "./pages/ProductManagement"
import CategoryManagement from "./pages/CategoryManagement"
import UserManagement from "./pages/UserManagement"
import OrderManagement from "./pages/OrderManagement"
import CardWishlist from "./pages/CardWishlist"
import Setting from "./pages/Setting"
import Reporting from "./pages/Reporting"




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}  >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="categories" element={<CategoryManagement />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="cart-wishlist" element={<CardWishlist />} />
          <Route path="settings" element={<Setting />} />
          <Route path="reporting" element={<Reporting />} />

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
