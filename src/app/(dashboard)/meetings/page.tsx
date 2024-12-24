'use client'
import DataTable from "@/components/DataTable";
import { columns } from "./column";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import * as XLSX from 'xlsx';

const MeetingsPage = () => {
  const rows = [
    {id:1, contactName: "John Doe", dateTime: "2024-12-01", status: "Schedule" },
    {id:2, contactName: "Jane Smith", dateTime: "2024-12-02", status: "Pending" },
    {id:3, contactName: "Bob Johnson", dateTime: "2024-12-03", status: "Canceled" },
    {id:4, contactName: "Alice Davis", dateTime: "2024-12-04", status: "Rescheduled" },
    {id:5, contactName: "Charlie Brown", dateTime: "2024-12-05", status: "Confirmed" },
    {id:6, contactName: "Diana Ross", dateTime: "2024-12-06", status: "Schedule" },
    {id:7, contactName: "Ethan Hunt", dateTime: "2024-12-07", status: "Pending" },
    {id:8, contactName: "Fiona Black", dateTime: "2024-12-08", status: "Canceled" },
    {id:9, contactName: "George White", dateTime: "2024-12-09", status: "Rescheduled" },
    {id:10, contactName: "Hannah Green", dateTime: "2024-12-10", status: "Confirmed" },
    {id:11, contactName: "Ian King", dateTime: "2024-12-11", status: "Schedule" },
    {id:12, contactName: "Jessica Blue", dateTime: "2024-12-12", status: "Pending" },
    {id:13, contactName: "Kevin Grey", dateTime: "2024-12-13", status: "Canceled" },
    {id:14, contactName: "Laura Stone", dateTime: "2024-12-14", status: "Rescheduled" },
    {id:15, contactName: "Mike Wood", dateTime: "2024-12-15", status: "Confirmed" },
    {id:16, contactName: "Nina Silver", dateTime: "2024-12-16", status: "Schedule" },
    {id:17, contactName: "Oscar Gold", dateTime: "2024-12-17", status: "Pending" },
    {id:18, contactName: "Paula Brown", dateTime: "2024-12-18", status: "Canceled" },
    {id:19, contactName: "Quentin Black", dateTime: "2024-12-19", status: "Rescheduled" },
    {id:20, contactName: "Rachel Green", dateTime: "2024-12-20", status: "Confirmed" },
    {id:21, contactName: "Sam White", dateTime: "2024-12-21", status: "Schedule" },
    {id:22, contactName: "Tina Gold", dateTime: "2024-12-22", status: "Pending" },
    {id:23, contactName: "Xavier King", dateTime: "2024-12-26", status: "Schedule" },
    {id:24, contactName: "Yasmine Stone", dateTime: "2024-12-27", status: "Pending" },
    {id:25, contactName: "Wendy Silver", dateTime: "2024-12-25", status: "Confirmed" },
    {id:26, contactName: "Victor Grey", dateTime: "2024-12-24", status: "Rescheduled" },
    {id:27, contactName: "Uma Blue", dateTime: "2024-12-23", status: "Canceled" },
  ];
  const filters = [
    { id: "contactName", label: "Name", placeholder: "Filter by name", columnId: "contactName", type: 'text' },
    { id: "statusFilter", label: "Status", placeholder: "Filter by status", columnId: "status", type: 'dropdown', options: [{ label: "Schedule", value: "schedule" }, { label: "Pending", value: "pending" }, { label: "Canceled", value: "canceled" }, { label: "Rescheduled", value: "rescheduled" }, { label: "Confirmed", value: "confirmed" }], },
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
    </div>)
}

export default MeetingsPage