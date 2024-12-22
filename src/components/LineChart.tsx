'use client'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", count: 186 },
    { month: "February", count: 305 },
    { month: "March", count: 237 },
    { month: "April", count: 73 },
    { month: "May", count: 20 },
    { month: "June", count: 21 },
  ]

const chartConfig = {
    desktop: {
        label: "Count",
        color: "#2563eb",
    },
} satisfies ChartConfig
const LineChartComponent = () => {
    return (
        <div className='w-full'>
            <div className='bg-blue-100 shadow-lg rounded-lg border p-2 flex flex-col gap-4'>
                <div className="mb-5 w-full rounded-lg bg-white p-3 py-4 flex flex-col">
                    <span className="text-blue-950 font-semibold">
                        Call Activity Trends
                    </span>
                    <span className="text-sm text-gray-400">
                        January - June 2024
                    </span>
                </div>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            dataKey="count"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="count"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-desktop)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ChartContainer>
                <div className="w-full rounded-lg bg-white p-3 py-4 flex flex-col">
                    <span className="text-sm text-gray-800">
                        Showing call trends for the last 6 months.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LineChartComponent