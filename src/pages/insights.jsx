import Image from "next/image"
import { Box, Paper } from "@mui/material"
import SalaryPrediction from "@/components/calculate-salary/salary-prediction"

export default function Insights() {
  return (
    <>
      <SalaryPrediction />
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}>
        <Box flex={{ xs: "1", md: "55.55%" }}>
          <Paper
            elevation={5}
            style={{
              position: "relative",
              overflow: "hidden",
              marginBottom: { xs: "16px", md: "0" }, // Adjust margin for mobile
            }}>
            <Image
              src="/rf-graph.png"
              alt="dashboard"
              width={1000}
              height={600}
              layout="responsive"
              objectFit="contain"
            />
          </Paper>
        </Box>
        <Box flex={{ xs: "1", md: "44.45%" }}>
          <Paper
            elevation={5}
            style={{
              position: "relative",
              overflow: "hidden",
              marginBottom: { xs: "16px", md: "0" }, // Adjust margin for mobile
            }}>
            <Image
              src="/linear-reg.png"
              alt="dashboard"
              width={800}
              height={600}
              layout="responsive"
              objectFit="contain"
            />
          </Paper>
        </Box>
      </Box>
    </>
  )
}
