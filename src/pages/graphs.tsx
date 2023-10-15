import SalaryBarChart from "@/components/charts/salaries-bar-chart"
import PieChart from "@/components/charts/pie-chart"
import { Box, Chip, Divider } from "@mui/material"

const Filter = () => {
  return (
    <Box component="main">
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
