import React, { useState, useEffect } from "react"
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material"
import * as d3 from "d3"

const SalaryPrediction = () => {
  const [distinctValues, setDistinctValues] = useState({
    experience_level: new Set(),
    company_size: new Set(),
    job_category: new Set(),
    employment_type: new Set(),
    remote_ratio: new Set(),
  })

  const [selectedValues, setSelectedValues] = useState({
    experience_level: "",
    company_size: "",
    job_category: "",
    employment_type: "",
    remote_ratio: "",
  })

  const [result2023, setResult2023] = useState(null)
  const [result2024, setResult2024] = useState(null)

  const coefficients = {
    2023: {
      experience_level: 39488.41271752,
      company_size: 1933.87420336,
      job_category: 6704.03030532,
      employment_type: 11912.8536472,
      remote_ratio: 1975.56852516,
      intercept: -10281.254383399792,
    },
    2024: {
      experience_level: 34914.01715412,
      company_size: 5122.52292425,
      job_category: 6024.43371773,
      employment_type: 2577.1101463,
      remote_ratio: 550.81098977,
      work_year: 15569.46812775,
      intercept: -31476007.13071412,
    },
  }

  const fetchData = async () => {
    try {
      const response = await d3.csv("/for_graphs.csv")

      response.forEach((entry) => {
        Object.keys(distinctValues).forEach((key) => {
          if (key === "job_category" && entry[key] !== "Other") {
            distinctValues[key].add(entry[key])
          } else if (key !== "job_category") {
            distinctValues[key].add(entry[key])
          }
        })
      })

      setDistinctValues({ ...distinctValues }) // Trigger state update
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const convertUnderscoreToTitleCase = (str) => {
    const words = str.split("_")
    const capitalizedWords = words.map((word) => capitalizeFirstLetter(word))
    return capitalizedWords.join(" ")
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleSelectChange = (key, value) => {
    setSelectedValues({
      ...selectedValues,
      [key]: value,
    })
  }

  const calculateSalaries = () => {
    const {
      experience_level,
      company_size,
      job_category,
      employment_type,
      remote_ratio,
    } = selectedValues

    const mappedValues = {
      experience_level: {
        Entry: 1,
        Intermediate: 2,
        Senior: 3,
        Executive: 4,
      },
      company_size: {
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 3,
      },
      job_category: {
        "Data Analyst": 0,
        "Data Architecture": 1,
        "Data Engineering": 2,
        "Data Science": 3,
        "Machine Learning": 4,
        Management: 5,
      },
      employment_type: {
        Contractor: 0,
        Freelancer: 1,
        "Full-time": 2,
        "Part-time": 3,
      },
      remote_ratio: {
        "On-Site": 2,
        "Half-Remote": 1,
        "Full-Remote": 0,
      },
    }

    const salary2023 =
      coefficients[2023].experience_level *
        mappedValues.experience_level[experience_level] +
      coefficients[2023].company_size *
        mappedValues.company_size[company_size] +
      coefficients[2023].job_category *
        mappedValues.job_category[job_category] +
      coefficients[2023].employment_type *
        mappedValues.employment_type[employment_type] +
      coefficients[2023].remote_ratio *
        mappedValues.remote_ratio[remote_ratio] +
      coefficients[2023].intercept

    const salary2024 =
      coefficients[2024].experience_level *
        mappedValues.experience_level[experience_level] +
      coefficients[2024].company_size *
        mappedValues.company_size[company_size] +
      coefficients[2024].job_category *
        mappedValues.job_category[job_category] +
      coefficients[2024].employment_type *
        mappedValues.employment_type[employment_type] +
      coefficients[2024].remote_ratio *
        mappedValues.remote_ratio[remote_ratio] +
      (coefficients[2024].work_year || 0) * 2024 +
      coefficients[2024].intercept -
      14000

    setResult2023(
      `${salary2023.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })}`
    )
    setResult2024(
      `${salary2024.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })}`
    )
  }

  const areAllDropdownsSelected = Object.values(selectedValues).every(
    (val) => val !== ""
  )

  return (
    <>
      <Typography
        variant="h3"
        fontWeight="bold"
        marginBottom={2}>
        Salary Estimation and Prediction
      </Typography>
      <Typography
        variant="body1"
        marginBottom={2}>
        Stay ahead of the curve by utilizing our Salary Calculator; input your
        information and learn how much money you should be making based on
        industry averages.
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center">
        {Object.keys(distinctValues).map((key) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            lg={3}
            key={key}>
            <FormControl fullWidth>
              <InputLabel id={`${key}Label`}>
                {convertUnderscoreToTitleCase(key)}
              </InputLabel>
              <Select
                labelId={`${key}Label`}
                label={convertUnderscoreToTitleCase(key)}
                value={selectedValues[key]}
                onChange={(e) => handleSelectChange(key, e.target.value)}>
                {[...distinctValues[key]].map((value) => (
                  <MenuItem
                    key={value}
                    value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
      <Box
        mt={2}
        mb={2}>
        <Button
          variant="contained"
          onClick={calculateSalaries}
          disabled={!areAllDropdownsSelected}>
          Calculate
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        pb={2}
        alignItems="center">
        {result2023 && (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}>
            <Paper
              elevation={3}
              style={{ padding: 15, marginTop: 20 }}>
              <Typography variant="h6">Estimated Salary for 2023</Typography>
              <Typography
                variant="h5"
                fontWeight="bold">
                {result2023}
              </Typography>
            </Paper>
          </Grid>
        )}
        {result2024 && (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}>
            <Paper
              elevation={3}
              style={{ padding: 15, marginTop: 20 }}>
              <Typography variant="h6">Predicted Salary for 2024</Typography>
              <Typography
                variant="h5"
                fontWeight="bold">
                {result2024}
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default SalaryPrediction
