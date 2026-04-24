// ================================================
// LETAK FILE: pertemuan-5/main.jsx
// ================================================

import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

function Main() {
    // IMPROVISASI 1: State Dark Mode
    const [darkMode, setDarkMode] = useState(false);

    // IMPROVISASI 2: State Active Menu
    const [activeMenu, setActiveMenu] = useState("dashboard");

    return (
        // class "dark" di sini yang mengaktifkan dark mode ke semua child
        <div className={darkMode ? "dark" : ""}>
            <div
                id="app-container"
                className="bg-latar min-h-screen flex dark:bg-gray-950"
            >
                <div id="layout-wrapper" className="flex flex-row flex-1">

                    <Sidebar
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                        darkMode={darkMode}
                    />

                    <div id="main-content" className="flex-1 p-4">
                        <Header
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />

                        {activeMenu === "dashboard"  && <Dashboard />}
                        {activeMenu === "orders"     && (
                            <div className="p-8 text-gray-500 dark:text-gray-400 text-center text-lg">
                                📦 Halaman Orders (Coming Soon)
                            </div>
                        )}
                        {activeMenu === "customers"  && (
                            <div className="p-8 text-gray-500 dark:text-gray-400 text-center text-lg">
                                👥 Halaman Customers (Coming Soon)
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<Main />);