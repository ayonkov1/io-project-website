import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import dynamic from 'next/dynamic'
import { Container, Toolbar, Typography } from '@mui/material'
const DataTable = dynamic(import('../../components/table'), { ssr: false })

export default function GraphPage() {
  return (
    <>
      <Toolbar />
      <DataTable />
    </>
  )
}
