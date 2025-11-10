import { IRoles } from "@/types";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#10b981", "#ef4444", "#f59e0b", "#3b82f6", "#06b6d4"];

export const RolesCharts = ({ roles }: { roles: IRoles }) => {

  const { barData, pieData } = useMemo(() => {
    if (!roles || Object.keys(roles).length === 0) {
      return { barData: [], pieData: [] };
    }

    const barData = Object.entries(roles).map(([category, subs]) => ({
      category,
      count: subs.length,
    }));

    const subCountMap: Record<string, number> = {};

    Object.values(roles).forEach((subList) => {
      subList.forEach((sub: { name: string | number; }) => {
        subCountMap[sub.name] = (subCountMap[sub.name] || 0) + 1;
      });
    });

    const pieData = Object.entries(subCountMap).map(([name, count]) => ({
      name,
      value: count,
    }));

    return { barData, pieData };
  }, [roles]);

  // 🔍 Jika tidak ada data
  if (!roles || Object.keys(roles).length === 0) {
    return <p>Tidak ada data roles untuk ditampilkan.</p>;
  }

  return (
    <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 450,
            height: 300,
            background: "#fff",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ textAlign: "center" }}> Total sub kategori pada setiap kategori</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={barData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#10b981"
                name="Jumlah Sub Kategori"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            width: 400,
            height: 300,
            background: "#fff",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ textAlign: "center" }}>total sub kategori setiap sub kategori</h3>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={50}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RolesCharts;