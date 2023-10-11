import React from "react"
import { Typography, styled, Paper } from "@mui/material"

const Container = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  gap: theme.spacing(5), // Adjust the gap as needed
  alignItems: "flex-start", // Align with the top of the image
}))

const Card = styled(Paper)({
  flex: "1 1 30%", // Adjust as needed
  textAlign: "left",
  padding: "16px", // Adjust as needed
  marginBottom: "20px", // Increase the gap
  backgroundColor: "#f8f8f8", // Slightly different background color
})

const cardData = [
  {
    title: "Explore the Dataset",
    content:
      "Through our Dataset you can learn about the various career paths in data science, from machine learning engineer to data analyst. Expand your understanding about the skills required and key responsibilities in each role. Gain insight into the demand for data science professionals in the job market and how to advance your career.",
  },
  {
    title: "Salary Trends in Data Science",
    content:
      "An in-depth analysis of salary trends in the field of data science, covering different roles and industries. Discover how factors such as experience, education, and location impact salaries. Get insights into negotiating a competitive salary and staying informed about industry benchmarks.",
  },
  {
    title: "Salary Calculator",
    content:
      "Stay ahead of the curve by utilizing our Salary Calculator; input your information and learn how much money you should be making based on industry averages.",
  },
]

const CardsSection: React.FC = () => {
  return (
    <Container>
      {cardData.map((card, index) => (
        <Card key={index}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="textPrimary"
            gutterBottom>
            {card.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph>
            {card.content}
          </Typography>
        </Card>
      ))}
    </Container>
  )
}

export default CardsSection
