import React from "react"
import { Typography, styled, Box, useTheme } from "@mui/material"
import image from "../assets/word-map-header.png"

const Container = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  position: "relative",
  display: "flex",
  flexDirection: "column", // Display columns on small screens
  alignItems: "center", // Center items on small screens
  gap: theme.spacing(5), // Adjust the gap as needed
  [theme.breakpoints.up("md")]: {
    flexDirection: "row", // Switch back to row layout on medium screens and above
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
}))

const Column = styled("div")(({ theme }) => ({
  flex: "1 1 40%", // 40% of the available space on small screens
  textAlign: "left",
  [theme.breakpoints.up("md")]: {
    flex: "1 1 40%", // 1/3 of the available space on medium screens and above
  },
}))

const ImageColumn = styled(Column)(({ theme }) => ({
  flex: "2 1 50%", // 60% of the available space on small screens
  display: "flex",
  justifyContent: "flex-end",
  order: 1, // Change the order to make it appear below on small screens
  [theme.breakpoints.up("md")]: {
    order: 0, // Reset the order on medium screens and above
  },
  "@media (min-width: 1200px)": {
    flex: "2 1 70%", // Slightly bigger on normal laptop screens
  },
}))

const Header = () => {
  const theme = useTheme() // Add this line to get the theme

  return (
    <Container theme={theme}>
      <Column>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="textPrimary"
          gutterBottom>
          Exploring Data Science Salaries
        </Typography>
        <Typography
          variant="h6"
          fontWeight="300"
          gutterBottom>
          2020-2024 Insights
        </Typography>
        <Typography
          variant="body1"
          fontWeight="300">
          Decoding the Numbers: Unveiling Data Science Salaries from 2020 to
          2023, with a Glimpse into 2024 and the Impact of Inflation
        </Typography>
      </Column>

      <ImageColumn theme={theme}>
        <Box
          component="img"
          src={image.src}
          alt="image"
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a drop shadow
            objectFit: "cover",
            borderRadius: "20px",
            opacity: 0.85,
          }}
        />
      </ImageColumn>
    </Container>
  )
}

export default Header
