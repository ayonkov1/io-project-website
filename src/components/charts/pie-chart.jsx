import React, { useEffect, useState } from "react"
import Chart from "chart.js/auto"
import * as d3 from "d3"
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
} from "@mui/material"

const PieChart = () => {
  const [xAxisProperty, setXAxisProperty] = useState("job_category")
  const [filterColumn, setFilterColumn] = useState("")
  const [filterValue, setFilterValue] = useState("")
  const [selectedDistinctValue, setSelectedDistinctValue] = useState("")
  const [chartInstance, setChartInstance] = useState(null)
  const [data, setData] = useState([])
  const [distinctValues, setDistinctValues] = useState([])
  const [filterColumnOptions, setFilterColumnOptions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await d3.csv("/for_graphs.csv")
        setData(response)
        updateDistinctValues(response, filterColumn)
        updateFilterColumnOptions(response, xAxisProperty)
        makeChart(response)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [xAxisProperty, filterColumn, filterValue])

  const updateDistinctValues = (data, column) => {
    const values = Array.from(new Set(data.map((d) => d[column])))
    setDistinctValues(values)
  }

  const updateFilterColumnOptions = (data, selectedXAxis) => {
    const options = [
      "work_year",
      "job_category",
      "experience_level",
      "employment_type",
      "company_location",
      "company_size",
    ].filter((column) => column !== selectedXAxis)
    setFilterColumnOptions(options)
  }

  const makeChart = (data) => {
    if (chartInstance) chartInstance.destroy()

    const filteredData = filterValue
      ? data.filter((d) => d[filterColumn] === filterValue)
      : data

    const uniqueValues = Array.from(
      new Set(filteredData.map((d) => d[xAxisProperty]))
    )

    const totalCount = filteredData.length

    const chartData = uniqueValues.map((value) => {
      const entryCount = filteredData.filter(
        (d) => d[xAxisProperty] === value
      ).length
      const percentage = ((entryCount / totalCount) * 100).toFixed(2)
      return { value, entryCount, percentage }
    })

    const ctx = document.getElementById("pie-chart").getContext("2d")
    setChartInstance(
      new Chart(ctx, {
        type: "pie",
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "left",
            },
            datalabels: {
              formatter: (value, ctx) => {
                let sum = 0
                let dataArr = ctx.chart.data.datasets[0].data
                dataArr.forEach((data) => {
                  sum += data
                })
                let percentage = ((value * 100) / sum).toFixed(2) + "%"
                return percentage
              },
              color: "#fff",
            },
          },
        },
        data: {
          labels: chartData.map((data) => data.value),
          datasets: [
            {
              data: chartData.map((data) => data.percentage),
              backgroundColor: [
                "#19A0AA",
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4CAF50",
                "#FF9800",
              ],
            },
          ],
        },
      })
    )
  }

  const handleFilterClick = (value) => {
    setFilterValue(value)
    setSelectedDistinctValue(value)
    makeChart(data)
  }

  const handleChangeFilterColumn = (event) => {
    const newFilterColumn = event.target.value
    setFilterColumn(newFilterColumn)
    updateDistinctValues(data, newFilterColumn)
    setFilterValue("")
    setSelectedDistinctValue("")
    makeChart(data)
  }

  const handleChangeXAxis = (property) => {
    setXAxisProperty(property)
    updateFilterColumnOptions(data, property)
    makeChart(data)
  }

  const getOptionLabel = (option) => {
    switch (option) {
      case "work_year":
        return "Work Year"
      case "job_category":
        return "Job Category"
      case "experience_level":
        return "Experience Level"
      case "employment_type":
        return "Employment Type"
      case "company_location":
        return "Company Location"
      case "company_size":
        return "Company Size"
      default:
        return option
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "60vh",
      }}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          width: "20vw",
        }}>
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}>
          <FormControl
            fullWidth
            variant="filled"
            sx={{
              marginBottom: 2,
            }}>
            <InputLabel id="xAxisLabel">Select X-axis property:</InputLabel>
            <Select
              labelId="xAxisLabel"
              id="xAxisSelect"
              value={xAxisProperty}
              onChange={(event) => handleChangeXAxis(event.target.value)}>
              <MenuItem value="work_year">Work Year</MenuItem>
              <MenuItem value="job_category">Job Category</MenuItem>
              <MenuItem value="experience_level">Experience Level</MenuItem>
              <MenuItem value="employment_type">Employment Type</MenuItem>
              <MenuItem value="company_location">Company Location</MenuItem>
              <MenuItem value="company_size">Company Size</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            sx={{
              marginBottom: 2,
            }}>
            <InputLabel id="filterColumnLabel">Select Filter:</InputLabel>
            <Select
              labelId="filterColumnLabel"
              id="filterColumnSelect"
              value={filterColumn}
              onChange={handleChangeFilterColumn}>
              {filterColumnOptions.map((option, index) => (
                <MenuItem
                  key={`${option}-${index}`}
                  value={option}>
                  {getOptionLabel(option)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              setFilterValue("")
              setFilterColumn("")
              setSelectedDistinctValue("")
            }}>
            Clear
          </Button>
          <Box
            sx={{
              overflowY: "auto",
              maxHeight: "calc(61vh - 240px)",
              marginTop: "20px",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
              },
            }}>
            {distinctValues.sort().map((value) => (
              <Button
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
                variant={value === selectedDistinctValue && "contained"}
                key={value}
                onClick={() => handleFilterClick(value)}>
                {value}
              </Button>
            ))}
          </Box>
        </Box>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          padding: "20px",
          ml: 3,
        }}>
        <canvas
          id="pie-chart"
          width="300"
          height="200"></canvas>
      </Paper>
    </Box>
  )
}

export default PieChart
