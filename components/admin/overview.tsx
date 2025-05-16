"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1200,
    previous: 900,
  },
  {
    name: "Feb",
    total: 1900,
    previous: 1200,
  },
  {
    name: "Mar",
    total: 2300,
    previous: 2000,
  },
  {
    name: "Apr",
    total: 2800,
    previous: 2400,
  },
  {
    name: "May",
    total: 3500,
    previous: 2800,
  },
  {
    name: "Jun",
    total: 4000,
    previous: 3200,
  },
  {
    name: "Jul",
    total: 4500,
    previous: 3800,
  },
  {
    name: "Aug",
    total: 4700,
    previous: 4000,
  },
  {
    name: "Sep",
    total: 4300,
    previous: 3700,
  },
  {
    name: "Oct",
    total: 3800,
    previous: 3000,
  },
  {
    name: "Nov",
    total: 3200,
    previous: 2600,
  },
  {
    name: "Dec",
    total: 2900,
    previous: 2400,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} labelFormatter={(label) => `Month: ${label}`} />
        <Bar dataKey="previous" fill="#d1d5db" radius={[4, 4, 0, 0]} name="Previous Period" />
        <Bar dataKey="total" fill="#16a34a" radius={[4, 4, 0, 0]} name="Current Period" />
      </BarChart>
    </ResponsiveContainer>
  )
}
