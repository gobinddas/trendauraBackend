import React, { useEffect, useState } from "react";
import {
    Users,
    Package,
    Layers,
    DollarSign,
    AlertTriangle,
    Clock,
} from "lucide-react";
import {
    products,
    users,
    orders,
    categories,
    subcategories,
} from "../components/data/dummydata.jsx"; // replace with correct path
// import prod

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalSales: 0,
        totalProducts: 0,
        totalCategories: 0,
        totalSubcategories: 0,
        totalUsers: 0,
        stockAlert: 0,
        lowStockProducts: [],
        recentOrders: [],
        categoryList: [],
    });

    useEffect(() => {
        const totalSales = orders.reduce((sum, order) => sum + order.amount, 0);
        const lowStockProducts = products
            .filter((p) => Object.values(p.stock).some((quantity) => quantity < 3))
            .slice(0, 5);

        const recentOrders = [...orders]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5)
            .map((order) => ({
                ...order,
                customer:
                    users.find((u) => u.id === order.customerId)?.name || "Unknown",
            }));

        setStats({
            totalSales,
            totalProducts: products.length,
            totalCategories: categories.length,
            totalSubcategories: subcategories.length,
            totalUsers: users.length,
            stockAlert: lowStockProducts.length,
            lowStockProducts,
            recentOrders,
            categoryList: categories.map((c) => c.name),
        });
    }, []);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    icon={<DollarSign />}
                    label="Total Sales"
                    value={`NPR ${stats.totalSales}`}
                />
                <StatCard
                    icon={<Package />}
                    label="Total Products"
                    value={stats.totalProducts}
                />
                <StatCard
                    icon={<Layers />}
                    label="Total Categories"
                    value={stats.totalCategories}
                />
                <StatCard
                    icon={<Layers />}
                    label="Total Subcategories"
                    value={stats.totalSubcategories}
                />
                <StatCard
                    icon={<Users />}
                    label="Total Users"
                    value={stats.totalUsers}
                />
                <StatCard
                    icon={<AlertTriangle />}
                    label="Stock Alerts"
                    value={stats.stockAlert}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category List */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold mb-2">Categories</h2>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                        {stats.categoryList.map((cat, i) => (
                            <li key={i}>{cat}</li>
                        ))}
                    </ul>
                </div>

                {/* Subcategory List */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold mb-2">Subcategories</h2>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                        {subcategories.map((sub, i) => {
                            const categoryName =
                                categories.find((cat) => cat.id === sub.categoryId)?.name ||
                                "Unknown";
                            return (
                                <li key={i}>
                                    {sub.name}{" "}
                                    <span className="text-gray-400 text-xs">
                                        (Category: {categoryName})
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Low Stock Products */}
            <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-4">Low Stock Products</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stats.lowStockProducts.map((p) => (
                        <div key={p.id} className="border p-3 rounded flex space-x-4">
                            <img
                                src={p.mainImage}
                                alt={p.name}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                                <div className="font-semibold">{p.name}</div>
                                <div className="text-sm text-gray-600">NPR {p.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock size={18} /> Recent Orders
                </h2>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left border-b border-gray-200">
                            <th className="py-2">Order ID</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Products</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.recentOrders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-100">
                                <td className="py-2">{order.id}</td>
                                <td>{order.customer}</td>
                                <td>NPR {order.amount}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium 
                    ${order.status === "Delivered"
                                                ? "bg-green-100 text-green-600"
                                                : order.status === "Shipped"
                                                    ? "bg-blue-100 text-blue-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value }) => (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="text-blue-500">{icon}</div>
        <div>
            <div className="text-gray-500 text-sm">{label}</div>
            <div className="text-xl font-semibold">{value}</div>
        </div>
    </div>
);

export default Dashboard;
