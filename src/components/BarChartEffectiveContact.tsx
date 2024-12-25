'use client';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartConfig = {
    desktop: {
        label: "Count",
        color: "#2563eb", // Ensure this color matches your theme
    },
} satisfies ChartConfig;

const BarChartEffectiveContact = ({rows}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // function countRowsByDay(rows) {
        //     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        //     const effectiveRows = rows.filter(row => row.status === "Effective").map(row => {
        //         const date = new Date(row.dateTime);
        //         return daysOfWeek[date.getDay()]; 
        //     });
        
        //     const dayCounts = effectiveRows.reduce((acc, day) => {
        //         acc[day] = (acc[day] || 0) + 1;
        //         return acc;
        //     }, {});
        
        //     const result = daysOfWeek.map(day => ({
        //         category: day,
        //         count: dayCounts[day] || 0, 
        //     }));
        
        //     return result;
        // }
        function countRowsByMonth(rows) {
            const monthsOfYear = [
                "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"
            ];
        
            const effectiveRows = rows.filter(row => row.status === "Effective").map(row => {
                const date = new Date(row.dateTime);
                return monthsOfYear[date.getMonth()];  // Extract the month name
            });
        
            const monthCounts = effectiveRows.reduce((acc, month) => {
                acc[month] = (acc[month] || 0) + 1;
                return acc;
            }, {});
        
            const result = monthsOfYear.map(month => ({
                category: month,
                count: monthCounts[month] || 0,  // If no rows for the month, set count to 0
            }));
        
            return result;
        }
        
        const rowsWithDays = countRowsByMonth(rows);
        setChartData(rowsWithDays);
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-col gap-4">
                <ChartContainer config={chartConfig}>
                    <BarChart data={chartData} width={600} height={300}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
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
                        <Bar dataKey="count" fill="#2563eb" radius={3} />
                    </BarChart>
                </ChartContainer>
            </div>
        </div>
    );
};

export default BarChartEffectiveContact;
