'use client';
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "contactName", 
    header: "Contact Name", 
    cell: ({ row }) => row.original.contactName, 
  },
  {
    accessorKey: "dateTime", 
    header: ({ column }) => {
      return (
        <span
          className="flex justif-start items-center cursor-pointer hover:bg-blue-100 w-fit py-2 px-1 rounded-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      )
    },
    cell: ({ row }) => row.original.dateTime, 
  },
  {
    accessorKey: "status", 
    header: ({ column }) => {
      return (
        <span
          className="flex justify-start items-center cursor-pointer hover:bg-blue-100 w-fit py-2 px-1 rounded-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded ${
          row.original.status === "Schedule"
            ? "bg-green-100 text-green-600"
            : row.original.status === "Pending"
            ? "bg-yellow-100 text-yellow-600"
            : row.original.status === "Canceled"
            ? "bg-red-100 text-red-600"
            : row.original.status === "Rescheduled"
            ? "bg-blue-100 text-blue-600"
            : row.original.status === "Confirmed"
            ? "bg-green-200 text-green-700"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },  
  {
    accessorKey: "actions", 
    header: "Actions", 
    cell: () => (
      <a href="#" className="text-blue-500 hover:underline">
        View
      </a>
    ),
  },
];
