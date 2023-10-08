import Header from '@/common/header'
import CardsSection from '@/common/triple-card'

import { Box, Chip, Divider, Toolbar, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Toolbar />
      <Header />

      <Divider>
        <Chip label='Why Data Science Salaries?' />
      </Divider>

      <CardsSection />
    </>
  )
}
