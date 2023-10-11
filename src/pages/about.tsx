import React, { useEffect, useState } from "react"
import { Typography, Link, Box } from "@mui/material"
import { useSpring, animated } from "react-spring"
import { easings } from "@react-spring/web"

const AboutPage = () => {
  const names = ["Atanas", "Dimitrios", "Ioannis", "Rhea"]
  const [shuffledNames, setShuffledNames] = useState(names.slice())

  const shuffleNames = () => {
    const shuffled = names.slice()
    const firstIndex = Math.floor(Math.random() * names.length)
    ;[shuffled[0], shuffled[firstIndex]] = [shuffled[firstIndex], shuffled[0]] // Swap the first name with a random name
    setShuffledNames(shuffled.sort(() => Math.random() - 0.5))
  }

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: shuffleNames,
    config: { duration: 1000, easing: easings.easeInOutExpo },
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      shuffleNames()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom>
        DS &apos;23
      </Typography>

      <Typography
        variant="h4"
        gutterBottom>
        Our Purpose
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "20px" }}>
        We are passionate about data science and committed to providing valuable
        insights into the ever-evolving world of data science salaries. Our
        mission is to empower data scientists, job seekers, employers, and
        anyone interested in the field with comprehensive and up-to-date
        information on salaries in the data science industry. The field of data
        science is rapidly changing, and staying informed about salary trends is
        crucial for both data science professionals and businesses looking to
        hire top talent. We understand the importance of having access to
        reliable and current salary data to make informed career decisions or
        staffing choices.
      </Typography>

      <Typography
        variant="h4"
        gutterBottom>
        What We Offer
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "20px" }}>
        <strong>Comprehensive Data:</strong> Our website features a meticulously
        curated dataset of data science salaries spanning from 2021 to 2023. We
        collect, verify, and present salary information from{" "}
        <Link
          href="https://www.kaggle.com/datasets/arnabchaki/data-science-salaries-2023"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          underline="hover">
          Kaggle
        </Link>
        , ensuring that you have access to the most accurate and up-to-date
        figures.
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "20px" }}>
        <strong>Interactive Visualization Tools:</strong> We offer interactive
        tools and visualizations that enable you to explore salary data by
        location, experience, industry, and more. Our goal is to make complex
        salary information accessible and easy to understand.
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "20px" }}>
        <strong>Salary Calculator:</strong> In addition to raw data, we provide
        a salary calculator for the user to predict their own salary relative to
        the information they provide us.
      </Typography>

      <Typography
        variant="h4"
        gutterBottom>
        Our Commitment
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "20px" }}>
        <strong>Accuracy:</strong> We are committed to providing accurate and
        reliable salary data. Our team works tirelessly to ensure that the
        information you find on our website is up-to-date and trustworthy.
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "20px" }}>
        <strong>User-Friendly Experience:</strong> We strive to create a
        user-friendly and intuitive platform where you can easily navigate and
        access the information you need.
      </Typography>

      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom>
        Happy data exploring!
      </Typography>

      <Typography
        variant="body1"
        style={{ marginTop: "20px" }}>
        Sincerely,
      </Typography>
      <animated.div style={props}>
        <Typography>{shuffledNames.join(", ")}</Typography>
      </animated.div>
    </Box>
  )
}

export default AboutPage
