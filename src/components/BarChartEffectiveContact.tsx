'use client';
import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { AppContext } from "@/context";
import { format, isWithinInterval, parseISO } from 'date-fns';

const chartConfig = {
    desktop: {
        label: "Count",
        color: "#2563eb", // Ensure this color matches your theme
    },
} satisfies ChartConfig;

const BarChartEffectiveContact = ({rows}) => {
    const {EffectiveContactFilterType, setEffectiveContactFilterType} = useContext(AppContext)
    const [chartData, setChartData] = useState([]);
    const {dateRange , setDateRange} = React.useContext(AppContext)

    useEffect(() => {
        function countRowsByDay(data) {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            
            const effectiveRows = data.filter(row => row.status === "Effective").map(row => {
                const date = new Date(row.dateTime);
                return daysOfWeek[date.getDay()];
            });
    
            const dayCounts = effectiveRows.reduce((acc, day) => {
                acc[day] = (acc[day] || 0) + 1;
                return acc;
            }, {});
    
            return daysOfWeek.map(day => ({
                category: day,
                count: dayCounts[day] || 0,
            }));
        }
    
        function countRowsByMonth(data) {
            const monthsOfYear = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
    
            const effectiveRows = data.filter(row => row.status === "Effective").map(row => {
                const date = new Date(row.dateTime);
                return monthsOfYear[date.getMonth()];
            });
    
            const monthCounts = effectiveRows.reduce((acc, month) => {
                acc[month] = (acc[month] || 0) + 1;
                return acc;
            }, {});
    
            return monthsOfYear.map(month => ({
                category: month,
                count: monthCounts[month] || 0,
            }));
        }
    
        // First, filter by date range if it exists
        let filteredData = rows;
        if (dateRange.from && dateRange.to) {
            filteredData = rows.filter(row => {
                const rowDate = parseISO(row.dateTime);
                return isWithinInterval(rowDate, {
                    start: dateRange.from,
                    end: dateRange.to
                });
            });
        }else{
            filteredData = rows
            console.log("No Date")
        }
        if (EffectiveContactFilterType === "month") {
            setChartData(countRowsByMonth(filteredData));
        } else if (EffectiveContactFilterType === "day") {
            setChartData(countRowsByDay(filteredData));
        }
    
    }, [EffectiveContactFilterType, rows, dateRange]);

    // useEffect(() => {
    //     function countRowsByDay(rows) {
    //         const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    //         const effectiveRows = rows.filter(row => row.status === "Effective").map(row => {
    //             const date = new Date(row.dateTime);
    //             return daysOfWeek[date.getDay()];
    //         });
    
    //         const dayCounts = effectiveRows.reduce((acc, day) => {
    //             acc[day] = (acc[day] || 0) + 1;
    //             return acc;
    //         }, {});
    
    //         return daysOfWeek.map(day => ({
    //             category: day,
    //             count: dayCounts[day] || 0, 
    //         }));
    //     }
    
    //     function countRowsByMonth(rows) {
    //         const monthsOfYear = [
    //             "January", "February", "March", "April", "May", "June", 
    //             "July", "August", "September", "October", "November", "December"
    //         ];

    
    //         const effectiveRows = rows.filter(row => row.status === "Effective").map(row => {
    //             const date = new Date(row.dateTime);
    //             return monthsOfYear[date.getMonth()];
    //         });
    
    //         const monthCounts = effectiveRows.reduce((acc, month) => {
    //             acc[month] = (acc[month] || 0) + 1;
    //             return acc;
    //         }, {});
    
    //         return monthsOfYear.map(month => ({
    //             category: month,
    //             count: monthCounts[month] || 0, 
    //         }));
    //     }

    //     if (EffectiveContactFilterType === "month") {
    //         const rowsByMonth = countRowsByMonth(rows);
    //         setChartData(rowsByMonth);
    //     } else if (EffectiveContactFilterType === "day") {
    //         const rowsByDay = countRowsByDay(rows);
    //         setChartData(rowsByDay);
    //     }
    // }, [EffectiveContactFilterType, rows,dateRange]);
    
    // useEffect(() => {
    //     if (!dateRange.from || !dateRange.to) {
    //       setChartData(rows);
    //       return;
    //     }
    
    //     const filtered = rows.filter(row => {
    //       const rowDate = parseISO(row.dateTime);
    //       return isWithinInterval(rowDate, {
    //         start: dateRange.from,
    //         end: dateRange.to
    //       });
    //     });
    //     setChartData(filtered);
    //   }, [dateRange]);
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
