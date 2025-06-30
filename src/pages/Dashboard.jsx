import React, { useEffect, useState } from "react";
import {
    Users,
    Package,
    Layers,
    DollarSign,
    AlertTriangle,
    Clock,
    User,
} from "lucide-react";
import {
    products,
    users,
    orders,
    categories,
    subcategories,
} from "../components/data/dummydata.jsx";

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
    })

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
        })



    }, [])



    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    icon={<DollarSign />}
                    label="Total Sales"
                    value={`NPR ${stats.totalSales}`} />
                <StatCard
                    icon={<Package />}
                    label="Total Products"
                    value={`${stats.totalProducts}`} />
                <StatCard
                    icon={<Layers />}
                    label="Total Categories"
                    value={`${stats.totalCategories}`} />
                <StatCard
                    icon={<Layers />}
                    label="Total Subcategories"
                    value={`${stats.totalSubcategories}`} />
                <StatCard
                    icon={<Users />}
                    label="Total Users"
                    value={`${stats.totalUsers}`} />
                <StatCard
                    icon={<AlertTriangle />}
                    label="Stock Alerts"
                    value={`${stats.stockAlert}`} />
            </div>


        </div>
    )
}

const StatCard = ({ icon, label, value }) => (

    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="text-blue-500"> {icon} </div>
        <div>
            <div className="text-gray-500 text-lg"> {label}  </div>
            <div className="text-xl font-semibold">{value}  </div>
        </div>
    </div>

);

export default Dashboard