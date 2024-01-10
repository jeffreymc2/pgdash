"use client"

import { Card, CategoryBar, Legend, Metric, Text } from "@tremor/react";

export default function LegendChart () {

return (
  <Card className="mx-auto">
    <Text>Total Points</Text>
    <Metric>250</Metric>
    <CategoryBar className="mt-4" values={[100, 150]} colors={["emerald", "red"]} />
    <Legend
      className="mt-3"
      categories={["Points Earned YTD", "Points to Next Tier"]}
      colors={["emerald", "red"]}
    />
  </Card>
    );
}