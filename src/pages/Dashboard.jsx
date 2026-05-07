import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import PieChartCard from "../components/PieChartCard";
import CustomerMap from "../components/CustomerMap";

export default function Dashboard() {
  return (
    <div id="dashboard-container">

      <PageHeader />

      {/* TOP CARD */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-5">

        <div className="flex items-center space-x-5 bg-white rounded-xl shadow p-4 dark:bg-gray-800">
          <div className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-2xl text-white" />
          </div>
          <div>
            <p className="text-xl font-bold dark:text-white">75</p>
            <p className="text-gray-400 text-sm">Total Orders</p>
          </div>
        </div>

        <div className="flex items-center space-x-5 bg-white rounded-xl shadow p-4 dark:bg-gray-800">
          <div className="bg-biru rounded-full p-4">
            <FaTruck className="text-2xl text-white" />
          </div>
          <div>
            <p className="text-xl font-bold dark:text-white">175</p>
            <p className="text-gray-400 text-sm">Total Delivered</p>
          </div>
        </div>

        <div className="flex items-center space-x-5 bg-white rounded-xl shadow p-4 dark:bg-gray-800">
          <div className="bg-merah rounded-full p-4">
            <FaBan className="text-2xl text-white" />
          </div>
          <div>
            <p className="text-xl font-bold dark:text-white">40</p>
            <p className="text-gray-400 text-sm">Total Canceled</p>
          </div>
        </div>

        <div className="flex items-center space-x-5 bg-white rounded-xl shadow p-4 dark:bg-gray-800">
          <div className="bg-kuning rounded-full p-4">
            <FaDollarSign className="text-2xl text-white" />
          </div>
          <div>
            <p className="text-xl font-bold dark:text-white">Rp.128</p>
            <p className="text-gray-400 text-sm">Total Revenue</p>
          </div>
        </div>

      </div>

      {/* 🔥 CHART SECTION (INI IMPROVISASI BARU) */}
      <div className="px-5 pb-5 grid md:grid-cols-3 gap-5">

        {/* Pie Chart besar */}
        <div className="md:col-span-2">
          <PieChartCard />
        </div>

        {/* Customer Map */}
        <CustomerMap />

      </div>

    </div>
  );
}