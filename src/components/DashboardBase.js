import { Title, Text, TabList, Tab, ColGrid, Card, Block } from "@tremor/react";
import React, { useState } from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import ChartDonut from './ChartDonut';
import CardGridMap from "./CardGridMap";
import TableBase from "./TableBase";

const DashboardBase = () => {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <main className="bg-slate-200 p-6 sm:p-10 h-screen">
      <Title>Dashboard</Title>
      <Text>Example of dashboard with tremor and react</Text>

      <TabList
        defaultValue={selectedView}
        marginTop="mt-6"
        handleSelect={(value) => setSelectedView(value)}
      >
        <Tab value={1} text="Principal" icon={HandThumbUpIcon} />
        <Tab value={2} text="Details" icon={HandThumbDownIcon} />
      </TabList>

      {selectedView === 1 ? (
        <>
        <CardGridMap/>

        <Block marginTop="mt-6">
          <Card>
              <ChartDonut />
          </Card>
        </Block>
        </>
      ) : (
        <>
          <Block marginTop='mt-6'>
            <TableBase />
          </Block>
        </>
      )}
    </main>
  );
};

export default DashboardBase;
