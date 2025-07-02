// src/layout/MainLayout.js
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  List,
  Users,
  ShoppingCart,
  Heart,
  BarChart2,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { to: "/categories", label: "Categories", icon: <List size={18} /> },
  { to: "/products", label: "Products", icon: <Package size={18} /> },

  { to: "/users", label: "Users", icon: <Users size={18} /> },
  { to: "/orders", label: "Orders", icon: <ShoppingCart size={18} /> },
  { to: "/cart-wishlist", label: "Wishlist", icon: <Heart size={18} /> },
  { to: "/reporting", label: "Reporting", icon: <BarChart2 size={18} /> },
  { to: "/settings", label: "Settings", icon: <Settings size={18} /> },
];

const MainLayout = () => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarWidth = sidebarCollapsed ? "w-20" : "w-60";

  return (
    <div className="flex h-screen bg-gray-100">
      <button className="md:hidden absolute top-4 left-4 z-30 p-2 rounded-md bg-white shadow"
      onClick={()=> setSidebarOpen(true)} aria-label= "Open sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside className={`fixed z-20 inset-y-0 left-0 bg-white shadow-md p-4 flex flex-col
          transition-all duration-200 ease-in-out 
          ${sidebarWidth}
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0
          `} style={{minWidth : sidebarCollapsed ? '5rem' : '15rem'}}  >
            {/* collapse expand button desktop only  */}

          <button  className="hidden md:flex items-center justify-center absolute -right-3 top-6 w-6 h-6 bg-white border rounded-full shadow z-30" onClick={() => setSidebarCollapsed(!sidebarCollapsed)} 
            aria-label = {sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            > 
              {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} /> }
            </button>



        <h2 className={`text-xl font-bold mb-8 text-gray-800 transition-all duration-200 ${sidebarCollapsed ? 'opacity-0 w-0 overflow-hidden':'' }`}>Trend Aura</h2>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
                ${
                  location.pathname === link.to
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }
                ${sidebarCollapsed ? 'justify-center' : ''}
                `}
              >
                {link.icon}
                {!sidebarCollapsed && 
                <span>{link.label}</span>
}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {sidebarOpen && (
         <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
