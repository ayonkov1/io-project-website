import Image from "next/image"
import { Box, Paper, Divider, Chip, Typography } from "@mui/material"
import SalaryPrediction from "@/components/calculate-salary/salary-prediction"

export default function Insights() {
  return (
    <>
      <SalaryPrediction />

      <Box
        mt={3}
        mb={3}>
        <Divider>
          <Chip label="How Does That Prediction Work?" />
        </Divider>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}>
        <Box flex={{ xs: "1", md: "43.55%" }}>
          <Typography
            variant="h6"
            mb={2}>
            Brief explanation of how the salary calculator functions: We are
            making use of Random Forest Feature Importance.
          </Typography>
          <Typography
            variant="body2"
            mb={1}>
            Random Forest feature importance can help identify which features
            (variables) are the most relevant in making predictions, which is
            crucial for dimensionality reduction, focusing on the most important
            features.
          </Typography>
          <Typography variant="body2">
            We are also utilizing Linear Regression, which is a widely used
            statistical and machine learning technique due to its reliability,
            simplicity, and interpretability. The right graph directly shows how
            accurate is the prediction of the linear regression model.
          </Typography>
        </Box>
        <Box flex={{ xs: "1", md: "42.85%" }}>
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
        <Box flex={{ xs: "1", md: "34.45%" }}>
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
