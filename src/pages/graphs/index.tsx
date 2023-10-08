import GraphsCard from '@/components/card-for-graphs'
import { Box, Toolbar } from '@mui/material'

const graphs = [
  {
    id: 1,
    title: 'Line Chart',
    subtitle: 'Monthly Sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod quam sed nulla commodo, vel tincidunt ex ultricies. Duis volutpat dolor non justo vulputate, eu vehicula justo tincidunt.',
    placeholder: '750x250',
  },
  {
    id: 2,
    title: 'Bar Chart',
    subtitle: 'Product Sales by Category',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Aenean hendrerit turpis at dui varius aliquet. Fusce vel metus quis elit ultricies hendrerit ut eu dolor.',
    placeholder: '750x250',
  },
  {
    id: 3,
    title: 'Pie Chart',
    subtitle: 'Distribution of Expenses',
    text: 'Vivamus at eros quis justo faucibus lacinia. Nam ullamcorper efficitur dui, at ullamcorper neque malesuada ut. Integer et ex nec ante euismod malesuada vel ac dui.',
    placeholder: '750x250',
  },
]

const Filter = () => {
  return (
    <Box
      component='main'
      sx={{ p: 3, fontFamily: 'fantasy' }}>
      <Toolbar />
      {graphs.map(({ id, title, subtitle, placeholder, text }) => (
        <Box key={id}>
          <GraphsCard
            key={id}
            title={title}
            subtitle={subtitle}
            text={text}
            placeholder={placeholder}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Filter
