import dynamic from "next/dynamic"
import { Box, Typography, Paper } from "@mui/material"
import Image from "next/image"
const DataTable = dynamic(import("../components/table.jsx"), { ssr: false })

export default function GraphPage() {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}>
        <Box flex={{ xs: "1", md: "40%" }}>
          <Typography
            mb={2}
            style={{
              marginTop: "20px",
              fontSize: "1.2rem",
              lineHeight: "1.5",
            }}>
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
            .
          </Typography>
          <Typography>
            To sort or filter through the data, hover over the first row and
            click on the horizontal three dots.
          </Typography>
        </Box>
        <Box
          flex={{ xs: "1", md: "60%" }}
          mb={5}>
          <Paper
            elevation={5}
            style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src="/dashboard.png"
              alt="dashboard"
              width={900}
              height={550}
              layout="responsive"
              objectFit="cover"
            />
          </Paper>
        </Box>
      </Box>
      <Paper>
        <DataTable />
      </Paper>
    </>
  )
}
