// src/layout/MainLayout.js
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Package, List,
  Users, ShoppingCart, Heart, BarChart2, Settings
} from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { to: '/products', label: 'Products', icon: <Package size={18} /> },
  { to: '/categories', label: 'Categories', icon: <List size={18} /> },
  { to: '/users', label: 'Users', icon: <Users size={18} /> },
  { to: '/orders', label: 'Orders', icon: <ShoppingCart size={18} /> },
  { to: '/cart-wishlist', label: 'Wishlist', icon: <Heart size={18} /> },
  { to: '/reporting', label: 'Reporting', icon: <BarChart2 size={18} /> },
  { to: '/settings', label: 'Settings', icon: <Settings size={18} /> },
]

const MainLayout = () => {
  const location = useLocation()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-8 text-gray-800">Trend Aura</h2>
        <ul className="space-y-3">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md 
                ${location.pathname === link.to ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
