"use client"

import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { DateRangePicker, DateRangePickerValue } from "@tremor/react";
import React, { useState } from 'react';


const data = [
    {
      teamName: "Dragons",
      eventName: "Summer Classic",
      registrationDate: "2024-05-15",
      ageGroup: "Under 14",
      paymentStatus: "Paid"
    },
    {
      teamName: "Hawks",
      eventName: "Spring Tournament",
      registrationDate: "2024-04-10",
      ageGroup: "Under 12",
      paymentStatus: "Pending"
    },
    {
      teamName: "Eagles",
      eventName: "Fall League",
      registrationDate: "2024-09-22",
      ageGroup: "Under 16",
      paymentStatus: "Paid"
    },
    {
      teamName: "Lions",
      eventName: "Winter Cup",
      registrationDate: "2022-12-05",
      ageGroup: "Under 14",
      paymentStatus: "Paid"
    },
    {
      teamName: "Sharks",
      eventName: "Holiday Series",
      registrationDate: "2023-11-15",
      ageGroup: "Under 10",
      paymentStatus: "Pending"
    },
  ];
  

  export default function TableCard() {
    const [dateRange, setDateRange] = useState({ from: undefined, to: undefined });
  
    const handleDateRangeChange = (value: any) => {
      console.log("Date Range Selected:", value);
      setDateRange(value);
    };
  
    const filteredData = data.filter(item => {
      const registrationDate = new Date(item.registrationDate);
      const from = dateRange.from ? new Date(dateRange.from) : new Date(-8640000000000000); // Earliest date
      const to = dateRange.to ? new Date(dateRange.to) : new Date(8640000000000000); // Latest date
  
      return registrationDate >= from && registrationDate <= to;
    });
  
  
    return (
      <Card>
        <div className="flex items-center justify-between">
          <Title>Organization Transactions YTD</Title>
          <DateRangePicker 
            className="mx-auto" 
            value={dateRange}
            onValueChange={handleDateRangeChange}
            enableSelect={false}
          />
        </div>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Team Name</TableHeaderCell>
              <TableHeaderCell>Event</TableHeaderCell>
              <TableHeaderCell>Transaction Date</TableHeaderCell>
              <TableHeaderCell>Age Group</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.teamName}>
                <TableCell>{item.teamName}</TableCell>
                <TableCell>
                  <Text>{item.eventName}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.registrationDate}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.ageGroup}</Text>
                </TableCell>
                <TableCell>
                  <Badge color="emerald">
                    {item.paymentStatus}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }