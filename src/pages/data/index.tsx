import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import dynamic from 'next/dynamic'
import { Box, Container, Toolbar, Typography } from '@mui/material'
const DataTable = dynamic(import('../../components/table'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function GraphPage() {
  return (
    <Box
      component='main'
      sx={{ p: 3, fontFamily: 'fantasy' }}>
      <Toolbar />
      <DataTable />
    </Box>
    // <main className={`${styles.className} ${inter.className}`}>
    // </Container>
    // </main>
  )
}
