'use client';
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<any>[] = [
    {
      accessorKey: "contactName",
      header: "Contact Name",
      cell: ({ row }) => row.original.contactName,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <a target="_blank" href={`mailto:${row.original.email}`} className="text-blue-500 hover:underline">
          {row.original.email}
        </a>
      ),
    },
    {
      accessorKey: "company",
      header: "Company",
      cell: ({ row }) => row.original.company,
    },
    {
      accessorKey: "dateTime",
      header: ({ column }) => {
        return (
          <span
            className="flex justify-start items-center cursor-pointer hover:bg-blue-100 w-fit py-2 px-1 rounded-lg"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </span>
        );
      },
      cell: ({ row }) => row.original.dateTime,
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
  