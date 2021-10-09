import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@material-ui/core";
//
import { BaseOptionChart } from "../../charts";
import { fDateMonth } from "../../../utils/formatTime";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "FAMILY AND FRIENDS",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21],
  },
  {
    name: "GENERAL",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41],
  },
  {
    name: "BILLS AND SERVICES",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52],
  },
  {
    name: "WITHDRAWALS",
    type: "column",
    data: [20, 5, 4, 27, 22, 23, 61, 11],
  },
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["solid", "gradient", "solid"] },
    labels: [
      "0",
      "1",
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `Ksh :${y.toFixed(0)} `;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title={`Total spent in ${fDateMonth(new Date())}`} subheader="KSH : 4,000" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
