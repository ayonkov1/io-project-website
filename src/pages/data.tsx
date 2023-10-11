import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

import dynamic from "next/dynamic"
import { Container, Paper, Toolbar, Typography } from "@mui/material"
const DataTable = dynamic(import("../components/table.jsx"), { ssr: false })

export default function GraphPage() {
  return (
    <>
      <Typography
        mb={2}
        style={{ marginTop: "20px", fontSize: "1.2rem", lineHeight: "1.5" }}>
        Explore the insights from our dataset on
        <a
          href="https://www.kaggle.com/datasets/arnabchaki/data-science-salaries-2023"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#007BFF",
            marginLeft: "5px",
            textDecoration: "none",
          }}>
          Kaggle
        </a>
        . To sort or filter through the data, hover over the first row and click
        on the horizontal three dots.
      </Typography>

      <Paper>
        <DataTable />
      </Paper>
    </>
  )
}
