"use client"

import { Card, DonutChart, Title, Flex } from "@tremor/react";

const pgCategories = [
  {
    name: "Events",
    sales: 800,
  },
  {
    name: "Uniforms",
    sales: 4567,
  },
  {
    name: "DK+",
    sales: 3908,
  },
  {
    name: "Merchandise",
    sales: 2400,
  },
  {
    name: "Hotels",
    sales: 1908,
  },
  {
    name: "Insurance",
    sales: 1398,
  },
];

const valueFormatter = (number: any) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export default function DonutChartTest () {

    return (
  <Card className="max-w-auto h-200">
    <Flex className="justify-center ">
        <Title><h1 className="text-xl">YTD Spend by Category</h1></Title>
    </Flex>
    <DonutChart
      className="mt-6"
      data={pgCategories}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["blue-900", "blue-800", "blue-700", "blue-600", "blue-500", "blue-200"]}
    />
  </Card>
);
}