import React from 'react'
import { Box, useTheme } from '@mui/material'
import Navbar from './navbar'

export default function Layout({ children }: React.PropsWithChildren) {
  const theme = useTheme() // Add this line to get the theme

  return (
    <>
      <Navbar />
      <Box
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '90%',
          marginTop: theme.spacing(5),
          paddingLeft: theme.spacing(2), // Add padding to match the overall styling
          paddingRight: theme.spacing(2), // Add padding to match the overall styling
        }}>
        {children}
      </Box>
    </>
  )
}
