import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import data from '../../public/data'

const RadarChartExample = () => {
  return (
    <RadarChart
      cx={300}
      cy={200}
      outerRadius={150}
      width={600}
      height={400}
      data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey='job_title' />
      <PolarRadiusAxis />
      <Radar
        name='Salary'
        dataKey='salary_in_usd'
        stroke='#8884d8'
        fill='#8884d8'
        fillOpacity={0.6}
      />
      <Radar
        name='Remote Ratio'
        dataKey='remote_ratio'
        stroke='#82ca9d'
        fill='#82ca9d'
        fillOpacity={0.6}
      />
      <Radar
        name='Company Size'
        dataKey='company_size'
        stroke='#ffc658'
        fill='#ffc658'
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}

export default RadarChartExample
