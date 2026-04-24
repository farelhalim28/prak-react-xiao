import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sun", value: 60 },
  { name: "Sun", value: 80 },
  { name: "Sun", value: 40 },
  { name: "Sun", value: 70 },
  { name: "Sun", value: 60 },
  { name: "Sun", value: 25 },
  { name: "Sun", value: 60 },
];

export default function CustomerMap() {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-gray-700 dark:text-white">
          Customer Map
        </h2>

        <button className="text-sm border px-3 py-1 rounded-md">
          Weekly
        </button>
      </div>

      <div className="h-52">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="value" fill="#f59e0b" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}