import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data1 = [{ value: 81 }, { value: 19 }];
const data2 = [{ value: 22 }, { value: 78 }];
const data3 = [{ value: 62 }, { value: 38 }];

const COLORS = ["#ef4444", "#f3f4f6"];

function ChartItem({ data, color, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 relative">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={35}
              outerRadius={45}
              dataKey="value"
              stroke="none"
            >
              <Cell fill={color} />
              <Cell fill="#e5e7eb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
          {data[0].value}%
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-2">{label}</p>
    </div>
  );
}

export default function PieChartCard() {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-gray-700 dark:text-white">
          Pie Chart
        </h2>
        <span className="text-gray-400">⋮</span>
      </div>

      <div className="flex justify-around">
        <ChartItem data={data1} color="#ef4444" label="Total Order" />
        <ChartItem data={data2} color="#10b981" label="Customer Growth" />
        <ChartItem data={data3} color="#3b82f6" label="Total Revenue" />
      </div>
    </div>
  );
}