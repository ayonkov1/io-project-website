import dynamic from "next/dynamic"
import Header from "@/common/header"
import CardsSection from "@/common/triple-card"
import { Box, Chip, Divider, Typography } from "@mui/material"

export default function Home() {
  return (
    <>
      <Header />
      <Divider>
        <Chip label="Why Data Science Salaries?" />
      </Divider>
      <CardsSection />
    </>
  )
}
