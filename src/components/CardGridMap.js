import { ColGrid, Card, Flex, Block, Metric, Text, BadgeDelta, ProgressBar } from "@tremor/react";
import React from 'react'
import CardBase from './CardBase';


const data = [
    {
        "id": "1",
        "title": 'Sales',
        "metric": '$ 12,200',
        "progress": 25.9,
        "target": "$ 80,000",
        "delta": '13.2%',
        "deltaType": 'moderateDecrease',
    },
    {
        "id": "2",
        "title": 'Orders',
        "metric": '$ 13,200',
        "progress": 12.9,
        "target": "$ 100,800",
        "delta": '26.3%',
        "deltaType": 'moderateIncrease',
    },
    {
        "id": "3",
        "title": 'Customers',
        "metric": '$ 14,200',
        "progress": 45.9,
        "target": "$ 90,000",
        "delta": '13.2%',
        "deltaType": 'moderateIncrease',
    },
]

const CardGridMap = () => {
  return (
    <ColGrid
      numColsMd={2}
      numColsLg={3}
      marginTop="mt-6"
      gapX="gap-x-6"
      gapY="gap-y-6"
    >
        {
            data.map((item) => (
                <Card key={item.id}>
                    <Flex alignItems="items-start">
                        <Block>
                            <Text>{item.title}</Text>
                            <Metric>{item.metric}</Metric>
                        </Block>
                        <BadgeDelta text={item.delta}/>
                    </Flex>
                    <Flex marginTop="mt-4" spaceX="space-x-2">
                        <Text>{` ${item.progress} % (${item.metric})`}</Text>
                        <Text>{item.target}</Text>
                    </Flex>
                    <ProgressBar percentageValue={item.progress} marginTop="mt-4"/>
                </Card>
            ))
        }
    </ColGrid>
  );
}

export default CardGridMap