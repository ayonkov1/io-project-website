import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import * as d3 from 'd3'
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material'

const SalaryChart = () => {
  const [xAxisProperty, setXAxisProperty] = useState('experience_level')
  const [filterColumn, setFilterColumn] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [selectedDistinctValue, setSelectedDistinctValue] = useState('')
  const [chartInstance, setChartInstance] = useState(null)
  const [data, setData] = useState([])
  const [distinctValues, setDistinctValues] = useState([])
  const [filterColumnOptions, setFilterColumnOptions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await d3.csv('/for_graphs.csv')
        console.log(response)
        setData(response)
        updateDistinctValues(response, filterColumn)
        updateFilterColumnOptions(response, xAxisProperty)
        makeChart(response)
      } catch (error) {
        console.error('Error fetching data:', error)
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
      'work_year',
      'job_category',
      'experience_level',
      'employment_type',
      'company_location',
      'company_size',
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
    const averageSalaries = uniqueValues.map((value) => {
      const salaries = filteredData
        .filter((d) => d[xAxisProperty] === value)
        .map((d) => +d.adjusted_salary)
      const averageSalary =
        salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length
      return averageSalary
    })

    const ctx = document.getElementById('chart').getContext('2d')
    setChartInstance(
      new Chart(ctx, {
        type: 'bar',
        options: {
          maintainAspectRatio: false, // Allow resizing on smaller screens
        },
        data: {
          labels: uniqueValues,
          datasets: [
            {
              label: 'Average Salary',
              data: averageSalaries,
              backgroundColor: '#19A0AA',
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
    setFilterValue('')
    setSelectedDistinctValue('')
    makeChart(data)
  }

  const handleChangeXAxis = (property) => {
    setXAxisProperty(property)
    updateFilterColumnOptions(data, property)
    makeChart(data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '80vh',
      }}>
      <Box
        sx={{
          width: '100%',
          padding: '20px',
        }}>
        <canvas
          id='chart'
          width='400'
          height='200'></canvas>
      </Box>

      <Box
        sx={{
          display: 'flex',
          // width: '100%',
        }}>
        <Box
          sx={{
            padding: '20px',
            backgroundColor: '#f5f5f5',
          }}>
          <FormControl
            fullWidth
            variant='filled'
            sx={{
              marginBottom: 2,
            }}>
            <InputLabel id='xAxisLabel'>Select X-axis property:</InputLabel>
            <Select
              labelId='xAxisLabel'
              id='xAxisSelect'
              value={xAxisProperty}
              onChange={(event) => handleChangeXAxis(event.target.value)}>
              <MenuItem value='work_year'>Work Year</MenuItem>
              <MenuItem value='job_category'>Job Category</MenuItem>
              <MenuItem value='experience_level'>Experience Level</MenuItem>
              <MenuItem value='employment_type'>Employment Type</MenuItem>
              <MenuItem value='company_location'>Company Location</MenuItem>
              <MenuItem value='company_size'>Company Size</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            variant='standard'
            sx={{
              marginBottom: 2,
            }}>
            <InputLabel id='filterColumnLabel'>Select Filter:</InputLabel>
            <Select
              labelId='filterColumnLabel'
              id='filterColumnSelect'
              value={filterColumn}
              onChange={handleChangeFilterColumn}>
              {filterColumnOptions.map((option, index) => (
                <MenuItem
                  key={`${option}-${index}`}
                  value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant='outlined'
            onClick={() => {
              setFilterValue('')
              setFilterColumn('')
              setSelectedDistinctValue('')
            }}>
            Clear
          </Button>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
            }}>
            {distinctValues.map((value) => (
              <Button
                variant={value === selectedDistinctValue && 'contained'}
                key={value}
                onClick={() => handleFilterClick(value)}>
                {value}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SalaryChart
