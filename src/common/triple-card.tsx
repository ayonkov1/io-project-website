import React from 'react'
import { Typography, styled, Paper } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  gap: theme.spacing(5), // Adjust the gap as needed
  alignItems: 'flex-start', // Align with the top of the image
}))

const Card = styled(Paper)({
  flex: '1 1 30%', // Adjust as needed
  textAlign: 'left',
  padding: '16px', // Adjust as needed
  marginBottom: '20px', // Increase the gap
  backgroundColor: '#f8f8f8', // Slightly different background color
})

const cardData = [
  {
    title: 'Data Science Careers',
    content:
      'Explore the various career paths in data science, from machine learning engineer to data analyst. Learn about the skills required and key responsibilities in each role. Understand the demand for data science professionals in the job market and how to advance your career.',
  },
  {
    title: 'Salary Trends in Data Science',
    content:
      'An in-depth analysis of salary trends in the field of data science, covering different roles and industries. Discover how factors such as experience, education, and location impact salaries. Get insights into negotiating a competitive salary and staying informed about industry benchmarks.',
  },
  {
    title: 'Emerging Technologies',
    content:
      'Discover the latest technologies shaping the future of data science, including AI, blockchain, and more. Explore how these technologies are revolutionizing data analysis, predictive modeling, and decision-making. Stay ahead of the curve by understanding the potential impact of emerging trends on the data science landscape.',
  },
]

const CardsSection: React.FC = () => {
  return (
    <Container>
      {cardData.map((card, index) => (
        <Card key={index}>
          <Typography
            variant='h5'
            fontWeight='bold'
            color='textPrimary'
            gutterBottom>
            {card.title}
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            paragraph>
            {card.content}
          </Typography>
        </Card>
      ))}
    </Container>
  )
}

export default CardsSection
