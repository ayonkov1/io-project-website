import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

type CardProps = {
  title: string
  subtitle: string
  text: string
  placeholder: string
}

export default function GraphsCard({
  title,
  subtitle,
  text,
  placeholder,
}: CardProps) {
  return (
    <Card sx={{ display: 'flex', mt: 3 }}>
      <CardMedia
        component='img'
        sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        image={`https://craftypixels.com/placeholder-image/${placeholder}/a6a6a6/636363&text=${placeholder}`}
        alt='Live from space album cover'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            component='div'
            variant='h5'>
            {title}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'>
            {subtitle}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
