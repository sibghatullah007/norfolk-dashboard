'use client'
import DataTable from "@/components/DataTable";
import { columns } from "./column";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import * as XLSX from 'xlsx';

const ContactsPage = () => {
  const rows = [
    {
      id: 1,
      contactName: "John Smith",
      email: "johnsmith@example.com",
      company: "Company Name One",
      dateTime: "2025-01-15",
      actions: "View",
    },
    {
      id: 2,
      contactName: "Sarah Johnson",
      email: "sarahj@example.com",
      company: "Company Name Two",
      dateTime: "2025-01-15",
      actions: "View",
    },
    {
      id: 3,
      contactName: "Michael Brown",
      email: "michaelbrown@example.com",
      company: "Company Name Three",
      dateTime: "2025-01-16",
      actions: "View",
    },
    {
      id: 4,
      contactName: "Emily Davis",
      email: "emilydavis@example.com",
      company: "Company Name Four",
      dateTime: "2025-01-16",
      actions: "View",
    },
    {
      id: 5,
      contactName: "David Wilson",
      email: "davidwilson@example.com",
      company: "Company Name Five",
      dateTime: "2025-01-17",
      actions: "View",
    },
    {
      id: 6,
      contactName: "Jessica Martinez",
      email: "jessicamartinez@example.com",
      company: "Company Name Six",
      dateTime: "2025-01-18",
      actions: "View",
    },
    {
      id: 7,
      contactName: "James Garcia",
      email: "jamesgarcia@example.com",
      company: "Company Name Seven",
      dateTime: "2025-01-18",
      actions: "View",
    },
    {
      id: 8,
      contactName: "Linda Hernandez",
      email: "lindahernandez@example.com",
      company: "Company Name Eight",
      dateTime: "2025-01-19",
      actions: "View",
    },
    {
      id: 9,
      contactName: "Robert Lee",
      email: "robertlee@example.com",
      company: "Company Name Nine",
      dateTime: "2025-01-20",
      actions: "View",
    },
    {
      id: 10,
      contactName: "Patricia Walker",
      email: "patriciawalker@example.com",
      company: "Company Name Ten",
      dateTime: "2025-01-20",
      actions: "View",
    },
  ];

  const filters = [
    { id: "contactName", label: "Name", placeholder: "Filter by name", columnId: "contactName", type: 'text' },
    { id: "email", label: "Email", placeholder: "Filter by email", columnId: "email", type: 'text' },
    { id: "companyFilter", label: "Company", placeholder: "Filter by company", columnId: "company", type: 'text' },
    { id: "dateFilter", label: "Date", placeholder: "Filter by Date", columnId: "dateTime", type: 'date' },
  ];
  const exportToExcel = (rows, columns) => {
    const worksheetData = [
      columns.map(col => col.header), // Add headers
      ...rows.map(row => columns.map(col => row[col.accessorKey])),
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "Meetings.xlsx");
  };

  return (
    <div className='p-4'>
      <div></div>
      <div>
        <div className="rounded-md border h-full shadow-lg">
          <div className='w-full rounded-lg rounded-b-none border-b-2 border-blue-200 bg-white p-3 py-4 flex justify-between items-center'>
            <span className="text-blue-950 font-semibold">
              Meetings
            </span>
            <div>
              <Button onClick={() => (exportToExcel(rows, columns))}
                className='bg-blue-600 hover:bg-blue-800'><CiExport /> Export</Button>
            </div>
          </div>
          <DataTable data={rows} columns={columns} filters={filters} />
        </div>
      </div>
    </div>
  )
}

export default ContactsPage