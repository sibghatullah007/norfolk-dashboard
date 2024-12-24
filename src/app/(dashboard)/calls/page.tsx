'use client'
import DataTable from "@/components/DataTable";
import { columns } from "../admin/column";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import * as XLSX from 'xlsx';

const CallsPage = () => {
  const rows = [
    { 
      id:1,
      contactName: "John Smith",
      company: "Acme Corp",
      dateTime: "2024-12-31",
      duration: "5:23",
      status: "Effective",
      actions: "View",
    },
    { 
      id:2,
      contactName: "Sarah Johnson",
      company: "Tech Solutions",
      dateTime: "2024-11-31",
      duration: "3:45",
      status: "Voicemail",
      actions: "View",
    },
    { 
      id:3,
      contactName: "Michael Brown",
      company: "Global Industries",
      dateTime: "2024-11-28",
      duration: "4:12",
      status: "Failed",
      actions: "View",
    },
    { 
      id:4,
      contactName: "Emily Davis",
      company: "Innovatech",
      dateTime: "2024-11-18",
      duration: "6:10",
      status: "Effective",
      actions: "View",
    },
    { 
      id:5,
      contactName: "David Wilson",
      company: "Bright Future LLC",
      dateTime: "2024-11-8",
      duration: "2:50",
      status: "Voicemail",
      actions: "View",
    },
    { 
      id:6,
      contactName: "Sophia Martinez",
      company: "NextGen Solutions",
      dateTime: "2024-12-11",
      duration: "5:00",
      status: "Failed",
      actions: "View",
    },
    { 
      id:7,
      contactName: "James Lee",
      company: "Tech World",
      dateTime: "2024-12-13",
      duration: "4:05",
      status: "Effective",
      actions: "View",
    },
    { 
      id:8,
      contactName: "Olivia Taylor",
      company: "Visionary Inc",
      dateTime: "2024-11-31",
      duration: "3:30",
      status: "Voicemail",
      actions: "View",
    },
    { 
      id:9,
      contactName: "Daniel Garcia",
      company: "Global Ventures",
      dateTime: "2024-12-28",
      duration: "4:45",
      status: "Failed",
      actions: "View",
    },
    { 
      id:10,
      contactName: "Michael Brown",
      company: "Global Industries",
      dateTime: "2024-12-28",
      duration: "4:12",
      status: "Effective",
      actions: "View",
    },
    { 
      id:11,
      contactName: "Emily Davis",
      company: "Innovatech",
      dateTime: "2024-11-18",
      duration: "6:10",
      status: "Effective",
      actions: "View",
    },
    { 
      id:12,
      contactName: "David Wilson",
      company: "Bright Future LLC",
      dateTime: "2024-11-8",
      duration: "2:50",
      status: "Voicemail",
      actions: "View",
    },
    { 
      id:13,
      contactName: "Sophia Martinez",
      company: "NextGen Solutions",
      dateTime: "2024-12-11",
      duration: "5:00",
      status: "Failed",
      actions: "View",
    },
    { 
      id:14,
      contactName: "James Lee",
      company: "Tech World",
      dateTime: "2024-12-13",
      duration: "4:05",
      status: "Effective",
      actions: "View",
    },
    { 
      id:15,
      contactName: "Olivia Taylor",
      company: "Visionary Inc",
      dateTime: "2024-12-24",
      duration: "3:30",
      status: "Voicemail",
      actions: "View",
    },
    { 
      id:16,
      contactName: "Daniel Garcia",
      company: "Global Ventures",
      dateTime: "2024-12-17",
      duration: "4:45",
      status: "Failed",
      actions: "View",
    },
  ];
  const filters = [
    { id: "contactName", label: "Name", placeholder: "Filter by name", columnId: "contactName", type: 'text' },
    { id: "companyFilter", label: "Company", placeholder: "Filter by company", columnId: "company", type: 'text' },
    { id: "statusFilter", label: "Status", placeholder: "Filter by status", columnId: "status", type: 'dropdown', options: [{ label: "Effective", value: "effective" }, { label: "Voicemail", value: "voicemail" }, { label: "Failed", value: "failed" },], },
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

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "Recent_Calls.xlsx");
};
  return (
    <div className='p-4'>
      <div></div>
      <div>
        <div className="rounded-md border h-full shadow-lg">
          <div className='w-full rounded-lg rounded-b-none border-b-2 border-blue-200 bg-white p-3 py-4 flex justify-between items-center'>
            <span className="text-blue-950 font-semibold">
              Recent Calls
            </span>
            <div>
                <Button onClick={()=>(exportToExcel(rows,columns))}
                 className='bg-blue-600 hover:bg-blue-800'><CiExport /> Export</Button>
            </div>
          </div>
          <DataTable data={rows} columns={columns} filters={filters} />
        </div>
      </div>
    </div>
  )
}

export default CallsPage