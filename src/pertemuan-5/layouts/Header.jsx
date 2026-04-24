// ================================================
// LETAK FILE: pertemuan-5/layouts/Header.jsx
// ================================================

import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header({ darkMode, setDarkMode }) {

    // IMPROVISASI 3: State Modal Search
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const searchData = [
        "Dashboard Overview",
        "Orders Management",
        "Customer List",
        "Revenue Report",
        "Delivery Status",
        "Menu Settings",
        "Staff Management",
    ];

    const filteredResults = searchData.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div
                id="header-container"
                className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 rounded-lg mb-2"
            >
                {/* Search Bar */}
                <div id="search-bar" className="relative w-full max-w-lg">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search Here..."
                        readOnly
                        onClick={() => setShowModal(true)}
                        className="border border-gray-100 dark:border-gray-700 p-2 pr-10 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 w-full max-w-lg rounded-md outline-none cursor-pointer"
                    />
                    <FaSearch
                        id="search-icon"
                        onClick={() => setShowModal(true)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
                    />
                </div>

                {/* Icons & Profile */}
                <div id="icons-container" className="flex items-center space-x-4 ml-4 flex-shrink-0">

                    {/* Notification */}
                    <div id="notification-icon" className="relative p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl text-blue-500 cursor-pointer">
                        <FaBell />
                        <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 dark:bg-blue-700 dark:text-white rounded-full px-2 py-1 text-xs">
                            50
                        </span>
                    </div>

                    {/* Chart */}
                    <div id="chart-icon" className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl cursor-pointer">
                        <FcAreaChart />
                    </div>

                    {/* Settings */}
                    <div id="settings-icon" className="p-3 bg-red-100 dark:bg-red-900 rounded-2xl text-red-500 cursor-pointer">
                        <SlSettings />
                    </div>

                    {/*
                        IMPROVISASI 1: Dark Mode Toggle
                        Klik untuk ganti tema gelap/terang
                    */}
                    <div
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-3 bg-gray-100 dark:bg-yellow-900 rounded-2xl text-gray-500 dark:text-yellow-400 cursor-pointer hover:opacity-80 transition-all"
                        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {darkMode
                            ? <MdLightMode className="text-xl" />
                            : <MdDarkMode  className="text-xl" />
                        }
                    </div>

                    {/* Profile */}
                    <div
                        id="profile-container"
                        className="flex items-center space-x-3 border-l pl-4 border-gray-200 dark:border-gray-700"
                    >
                        <span id="profile-text" className="text-gray-700 dark:text-gray-200 whitespace-nowrap text-sm">
                            Hello, <b>Farel Abdul Halim</b>
                        </span>
                        <img
                            id="profile-avatar"
                            src="https://avatar.iran.liara.run/public/28"
                            alt="avatar"
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                    </div>
                </div>
            </div>

            {/*
                IMPROVISASI 3: Modal Search
                Muncul saat klik search bar
            */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Input dalam modal */}
                        <div className="flex items-center p-4 border-b border-gray-100 dark:border-gray-700">
                            <FaSearch className="text-gray-400 mr-3 flex-shrink-0" />
                            <input
                                type="text"
                                placeholder="Search anything..."
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 outline-none text-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                            />
                            <FaTimes
                                className="text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-200 ml-2"
                                onClick={() => setShowModal(false)}
                            />
                        </div>

                        {/* Hasil Search */}
                        <div className="max-h-72 overflow-y-auto">
                            {searchQuery === "" ? (
                                <div className="p-6 text-gray-400 text-sm text-center">
                                    Ketik sesuatu untuk mencari...
                                </div>
                            ) : filteredResults.length === 0 ? (
                                <div className="p-6 text-gray-400 text-sm text-center">
                                    Tidak ada hasil untuk "<b>{searchQuery}</b>"
                                </div>
                            ) : (
                                filteredResults.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors border-b border-gray-50 dark:border-gray-700 last:border-0"
                                        onClick={() => { setShowModal(false); setSearchQuery(""); }}
                                    >
                                        <FaSearch className="text-gray-300 text-xs flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-200 text-sm">{item}</span>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer modal */}
                        <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-400 flex justify-between">
                            <span>Klik di luar untuk tutup</span>
                            <span>{filteredResults.length} hasil ditemukan</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}