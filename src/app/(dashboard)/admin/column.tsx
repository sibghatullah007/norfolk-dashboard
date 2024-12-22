'use client';
import { ColumnDef } from "@tanstack/react-table";

// Define columns for the table
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "contactName", // Key for the row data
    header: "Contact Name", // Header displayed in the table
    cell: ({ row }) => row.original.contactName, // Access row data
  },
  {
    accessorKey: "company", // Key for the company data
    header: "Company", // Header displayed in the table
    cell: ({ row }) => row.original.company, // Access row data
  },
  {
    accessorKey: "dateTime", // Key for date & time
    header: "Date & Time", // Header displayed in the table
    cell: ({ row }) => row.original.dateTime, // Access row data
  },
  {
    accessorKey: "duration", // Key for the duration
    header: "Duration", // Header displayed in the table
    cell: ({ row }) => row.original.duration, // Access row data
  },
  {
    accessorKey: "status", // Key for the status
    header: "Status", // Header displayed in the table
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded ${
          row.original.status === "Effective"
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
