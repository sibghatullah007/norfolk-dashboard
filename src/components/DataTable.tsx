"use client";
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from './ui/button';
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface FilterType {
    id: string; // Unique identifier for the filter
    label: string; // Label for the filter
    placeholder: string; // Placeholder text for the filter input
    columnId: string;
    type: string; 
    options?: Array<{ value: string , label:string}>; 
}
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filters?: FilterType[];
}

const DataTable = <TData, TValue>({ columns, data, filters = [], }: DataTableProps<TData, TValue>) => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });
    const [date, setDate] = React.useState<Date>()

    return (
        <div>
                {/* <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter company..."
                        value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("company")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div> */}
                <div className="flex items-center flex-wrap p-2">
                    {filters.map((filter) => {
                        if (filter.type === "text") {
                            return (
                                <div className="w-full md:w-1/4 px-0 md:px-1 my-2 md:my-0 mx-0" key={filter.id}>
                                    <Input
                                        placeholder={filter.placeholder}
                                        value={(table.getColumn(filter.columnId)?.getFilterValue() as string) ?? ""}
                                        onChange={(event) =>
                                            table.getColumn(filter.columnId)?.setFilterValue(event.target.value)
                                        }
                                    />
                                </div>
                            );
                        } else if (filter.type === "date") {
                            const selectedDate = table.getColumn(filter.columnId)?.getFilterValue() as string | undefined;
                            return (
                                <div className="w-full md:w-1/4 px-0 md:px-1 my-2 md:my-0" key={filter.id}>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon />
                                                {date ? date.toDateString() : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                key={filter.id}
                                                selected={selectedDate ? new Date(selectedDate) : undefined}
                                                onSelect={(date) => {
                                                    if (date) {
                                                        const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                                                            .toISOString()
                                                            .split("T")[0]; // Format as YYYY-MM-DD
                                                        table.getColumn(filter.columnId)?.setFilterValue(localDate);
                                                        setDate(date)
                                                    } else {
                                                        table.getColumn(filter.columnId)?.setFilterValue("");
                                                        setDate(null)
                                                    }
                                                }}
                                                className="rounded-md border"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            );
                        } else if (filter.type === "dropdown") {
                            return (
                                <div className="w-full md:w-1/4 px-0 md:px-1 my-2 md:my-0" key={filter.id}>
                                    <Select
                                        onValueChange={(value) => {
                                            table.getColumn(filter.columnId)?.setFilterValue(value);
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue className="placeholder:text-white-400" placeholder="Filter by status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value={null} className="text-gray-400">
                                                Select the Filter
                                            </SelectItem>
                                            {filter.options?.map((option) => (
                                                <SelectItem value={option.value} key={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            );
                        }else {
                            return null;
                        }
                    })}


                </div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <div className="flex items-center justify-end space-x-2 py-4 me-3">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
        </div>
    );
};

export default DataTable;
