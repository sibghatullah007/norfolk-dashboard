'use client'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { category: "Scheduled", count: 186 },
    { category: "Confirmed", count: 305 },
    { category: "Pending Rescheduling", count: 237 },
    { category: "Rescheduled", count: 73 },
    { category: "Canceled", count: 209 }
]

const chartConfig = {
    desktop: {
        label: "Count",
        color: "#2563eb",
    },
} satisfies ChartConfig
const BarChartComponent = () => {
    return (
        <div className='w-full'>
            <div className='bg-blue-100 shadow-lg rounded-lg border p-2 flex flex-col gap-4'>
                <div className="mb-5 w-full rounded-lg bg-white p-3 py-4 flex flex-col">
                    <span className="text-blue-950 font-semibold">
                        Meetings Status Distribution
                    </span>
                    <span className="text-sm text-gray-400">
                        January - June 2024
                    </span>
                </div>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 10)}
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
                        <Bar dataKey="count" fill="var(--color-desktop)" radius={3} />
                    </BarChart>
                </ChartContainer>
                <div className="w-full rounded-lg bg-white p-3 py-4 flex flex-col">
                    <span className="text-sm text-gray-800">
                        Showing total meetings for the last 6 months.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BarChartComponent