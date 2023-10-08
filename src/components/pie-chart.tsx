import React from 'react'
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Principal Data Scientist', value: 2 },
  { name: 'ML Engineer', value: 3 },
  { name: 'Data Scientist', value: 6 },
  { name: 'Applied Scientist', value: 2 },
  { name: 'Data Modeler', value: 2 },
  { name: 'Data Analyst', value: 3 },
  { name: 'Research Engineer', value: 2 },
  { name: 'Analytics Engineer', value: 2 },
  { name: 'Business Intelligence Engineer', value: 1 },
]

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AF19FF',
  '#FF6666',
  '#66CCCC',
  '#C2C2A3',
  '#FFD700',
]

const JobDistributionPieChart = () => {
  return (
    <PieChart
      width={1000}
      height={500}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={100}
        fill='#8884d8'
        dataKey='value'
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  )
}

export default JobDistributionPieChart
