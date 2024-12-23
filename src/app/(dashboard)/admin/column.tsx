'use client';
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"

// Define columns for the table
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "contactName", // Key for the row data
    header: "Contact Name", // Header displayed in the table
    cell: ({ row }) => row.original.contactName, // Access row data
  },
  {
    accessorKey: "company", 
    header: "Company", 
    cell: ({ row }) => row.original.company, 
  },
  {
    accessorKey: "dateTime", // Key for date & time
    header: ({ column }) => {
      return (
        <span
          className="flex justif-start items-center cursor-pointer hover:bg-blue-100 w-fit py-2 px-1 rounded-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date and Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      )
    },
    cell: ({ row }) => row.original.dateTime, // Access row data
  },
  {
    accessorKey: "duration", // Key for the duration
    header: ({ column }) => {
      return (
        <span
          className="flex justif-start items-center cursor-pointer hover:bg-blue-100 w-fit py-2 px-1 rounded-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Duration
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      )
    },
    cell: ({ row }) => row.original.duration, // Access row data
  },
  {
    accessorKey: "status", // Key for the status
    header: ({ column }) => {
      return (
        <span
          className="flex justif-start items-center cursor-pointer hover:bg-blue-100 w-fit py-2 px-1 rounded-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      )
    },
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded ${row.original.status === "Effective"
            ? "bg-green-100 text-green-600"
            : row.original.status === "Voicemail"
              ? "bg-yellow-100 text-yellow-600"
              : row.original.status === "Failed"
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600"
          }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "actions", // Key for the actions
    header: "Actions", // Header displayed in the table
    cell: () => (
      <a href="#" className="text-blue-500 hover:underline">
        View
      </a>
    ),
  },
];
