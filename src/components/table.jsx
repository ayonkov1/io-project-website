import * as React from "react"
import * as d3 from "d3"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { Container } from "@mui/material"

const columns = [
  {
    field: "id",
    sortable: false,
    headerName: "ID",
    width: 70,
    disableColumnMenu: true,
  },
  { field: "work_year", headerName: "Work Year", width: 100 },
  { field: "job_category", headerName: "Job Category", width: 130, flex: 1 },
  { field: "job_title", headerName: "Job Title", width: 200, flex: 1 },

  {
    field: "experience_level",
    headerName: "Experience Level",
    width: 150,
    flex: 1,
  },
  {
    field: "employment_type",
    headerName: "Employment Type",
    width: 130,
    flex: 1,
  },
  {
    field: "company_location",
    headerName: "Company Location",
    width: 130,
    flex: 1,
  },
  { field: "company_size", headerName: "Company Size", width: 130, flex: 1 },
  {
    field: "remote_ratio",
    headerName: "Remote Ratio",
    width: 130,
    flex: 1,
  },
  {
    field: "adjusted_salary",
    headerName: "Salary in $",
    width: 80,
    flex: 1,
  },
]

const DataTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await d3.csv("/for_graphs.csv")
        setData(response)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const rows = data.map((row, index) => ({
    ...row,
    id: index + 1,
    adjusted_salary: Number(row.adjusted_salary),
  }))

  return (
    <DataGrid
      columnHeaderHeight={30}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10, 20, 50]}
    />
  )
}

export default DataTable
