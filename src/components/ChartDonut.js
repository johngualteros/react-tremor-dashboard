import { DonutChart, Card , Title } from '@tremor/react'
import React from 'react'

const cities = [
    {
        name: 'New York',
        sales: 9800,
    },
    {
        name: 'London',
        sales: 5000,
    },
    {
        name: 'Madrid',
        sales: 4800,
    },
    {
        name: 'Paris',
        sales: 3000,
    },
    {
        name: 'Barcelona',
        sales: 2800,
    },
    {
        name: 'Berlin',
        sales: 2600,
    },
    {
        name: 'Rome',
        sales: 2400,
    },
]

const ChartDonut = () => {
  return (
    <Card>
        <Title>Sales by city</Title>
        <DonutChart 
            data={cities}
            category='sales'
            dataKey='name'
            marginTop='mt-6'
            // Can add array for define the colors
        />
    </Card>
  )
}

export default ChartDonut