import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import dynamic from 'next/dynamic'
import RadarChartGraph from '@/components/radar-chart'
import { ResponsiveContainer } from 'recharts'
const Graph = dynamic(import('../../components/bar-chart'), { ssr: false })
const Radar = dynamic(import('../../components/radar-chart'), { ssr: false })
const Pie = dynamic(import('../../components/pie-chart'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function GraphPage() {
  return (
    <main className={`${styles.className} ${inter.className}`}>
      <ResponsiveContainer>
        <Pie />
      </ResponsiveContainer>
    </main>
  )
}
