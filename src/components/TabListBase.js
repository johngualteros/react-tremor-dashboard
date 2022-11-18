import { TabList, Tab, Card } from "@tremor/react";
import React, { useState } from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

const TabListBase = () => {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <>
      <TabList
        defaultValue={selectedView}
        marginTop="mt-6"
        handleSelect={(value) => setSelectedView(value)}
      >
        <Tab value={1} text="Pestaña 1" icon={HandThumbUpIcon} />
        <Tab value={2} text="Pestaña 2" icon={HandThumbDownIcon} />
      </TabList>

      {selectedView === 1 ? (
        <Card>
          <div className="h-28 bg-sky-600"/>
        </Card>
      ) : (
        <Card>
          <div className="h-28 bg-sky-500">a</div>
        </Card>
      )}
    </>
  );
};

export default TabListBase;
