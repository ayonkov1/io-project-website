import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import data from '../../public/data'

const BarGraph = () => {
  if (typeof window !== 'undefined') {
    return (
      <BarChart
        width={1200}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='job_title' />
        <YAxis domain={[0, 250000]} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey='salary_in_usd'
          fill='#8884d8'
        />
        <Bar
          dataKey=''
          fill='#82ca9d'
        />
      </BarChart>
    )
  }
  return null
}

export default BarGraph
