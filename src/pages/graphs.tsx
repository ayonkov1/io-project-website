import SalaryBarChart from "@/components/charts/salaries-bar-chart"
import PieChart from "@/components/charts/pie-chart"
import { Box, Chip, Divider, Typography } from "@mui/material"

const Filter = () => {
  return (
    <Box component="main">
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}>
        Discover how factors such as experience, education, and location impact
        salaries by utilizing the filters in the Bar Chart and Pie Chart below.
      </Typography>
      <Divider>
        <Chip label="Salary Bar Chart" />
      </Divider>
      <Box
        mt={2}
        mb={6}>
        <SalaryBarChart />
      </Box>
      <Divider>
        <Chip label="Percentage Pie Chart" />
      </Divider>
      <Box
        mt={2}
        mb={2}>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Filter
