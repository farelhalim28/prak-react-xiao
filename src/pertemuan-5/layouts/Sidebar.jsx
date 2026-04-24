// ================================================
// LETAK FILE: pertemuan-5/layouts/Sidebar.jsx
// ================================================

import { FaTachometerAlt, FaShoppingCart, FaUsers } from "react-icons/fa";

export default function Sidebar({ activeMenu, setActiveMenu }) {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt className="mr-4 text-xl" /> },
        { id: "orders",    label: "Orders",    icon: <FaShoppingCart  className="mr-4 text-xl" /> },
        { id: "customers", label: "Customers", icon: <FaUsers         className="mr-4 text-xl" /> },
    ];

    return (
        <div
            id="sidebar"
            className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg dark:bg-gray-900"
        >
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span
                    id="logo-title"
                    className="font-poppins text-[48px] font-[800] text-gray-900 dark:text-white leading-tight"
                >
                    Sedap<b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span
                    id="logo-subtitle"
                    className="font-barlow font-semibold text-gray-400 dark:text-gray-500"
                >
                    Modern Admin Dashboard
                </span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            {/*
                                IMPROVISASI 2: Active Menu
                                Menu aktif → hijau + bold
                                Menu lain  → abu-abu
                            */}
                            <div
                                id={`menu-${item.id}`}
                                onClick={() => setActiveMenu(item.id)}
                                className={`flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all duration-200
                                    ${activeMenu === item.id
                                        ? "bg-green-100 text-hijau font-extrabold dark:bg-green-900 dark:text-hijau"
                                        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold dark:text-gray-400 dark:hover:bg-green-900 dark:hover:text-hijau"
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <span
                    id="footer-brand"
                    className="block font-bold text-gray-400 text-sm dark:text-gray-600"
                >
                    Sedap Restaurant Admin Dashboard
                </span>
                <p
                    id="footer-copyright"
                    className="font-light text-gray-400 text-sm dark:text-gray-600"
                >
                    &copy; 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}