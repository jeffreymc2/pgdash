import React from "react";
// import {SalesThisWeek} from "@/app/dashboard/components/SalesThisWeek"
import KpiCardGrid from "../components/KPI";
import TableCard from "../components/Table";
import Progress from "../components/Progress";
import DonutChartTest from "../components/DonutChart";
import LegendChart from "../components/LegendChart";

export default function Dashboard() {
    return (
        <div className="px-4 pt-6">           
            {/* <h1>Dashboard</h1> */}
            {/* <SalesThisWeek/> */}
            <KpiCardGrid/>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                <Progress/>
                <DonutChartTest/>
                <LegendChart/>
            </div>

            <TableCard/>
        </div>
    );
}
