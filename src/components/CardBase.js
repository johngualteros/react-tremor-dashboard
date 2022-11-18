import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import React from "react";

const CardBase = () => {
  return <Card maxWidth="max-w-sm">
    <Text>Sales</Text>
    <Metric>$ 71,465</Metric>
    <Flex marginTop="mt-2">
        <Text>32% of annual target</Text>
        <Text>Sales</Text>
    </Flex>
    <ProgressBar percentageValue={32} marginTop="mt-2"/>
  </Card>;
};

export default CardBase;
