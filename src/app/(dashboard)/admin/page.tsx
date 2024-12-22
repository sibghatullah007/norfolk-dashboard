import BarChartComponent from "../../../components/BarChart"
import KPICard from "../../../components/KPICard"
import DataTable from "../../..//components/DataTable";
import { columns } from "./column";
import LineChartComponent from "@/components/LineChart";

const AdminPage = () => {
  const rows = [
    {
      contactName: "John Smith",
      company: "Acme Corp",
      dateTime: "Jan 15, 2025 10:30 AM",
      duration: "5:23",
      status: "Effective",
      actions: "View",
    },
    {
      contactName: "Sarah Johnson",
      company: "Tech Solutions",
      dateTime: "Jan 15, 2025 11:15 AM",
      duration: "3:45",
      status: "Voicemail",
      actions: "View",
    },
    {
      contactName: "Michael Brown",
      company: "Global Industries",
      dateTime: "Jan 15, 2025 2:00 PM",
      duration: "4:12",
      status: "Failed",
      actions: "View",
    },
    {
      contactName: "Emily Davis",
      company: "Innovatech",
      dateTime: "Jan 15, 2025 9:45 AM",
      duration: "6:10",
      status: "Effective",
      actions: "View",
    },
    {
      contactName: "David Wilson",
      company: "Bright Future LLC",
      dateTime: "Jan 15, 2025 12:30 PM",
      duration: "2:50",
      status: "Voicemail",
      actions: "View",
    },
    {
      contactName: "Sophia Martinez",
      company: "NextGen Solutions",
      dateTime: "Jan 15, 2025 3:00 PM",
      duration: "5:00",
      status: "Failed",
      actions: "View",
    },
    {
      contactName: "James Lee",
      company: "Tech World",
      dateTime: "Jan 15, 2025 4:15 PM",
      duration: "4:05",
      status: "Effective",
      actions: "View",
    },
    {
      contactName: "Olivia Taylor",
      company: "Visionary Inc",
      dateTime: "Jan 15, 2025 1:10 PM",
      duration: "3:30",
      status: "Voicemail",
      actions: "View",
    },
    {
      contactName: "Daniel Garcia",
      company: "Global Ventures",
      dateTime: "Jan 15, 2025 11:45 AM",
      duration: "4:45",
      status: "Failed",
      actions: "View",
    },
  ];

  return (
    <div className='p-4 flex flex-col'>
      <div className="w-full flex gap-4 justify-between flex-wrap">
        <KPICard type="Total Calls" value="3402" icon="FaPhone" range="2023 / 24" />
        <KPICard type="Effective Contacts" value="76" icon="FaUsersGear" range="2023 / 24" />
        <KPICard type="Scheduled Meetings" value="1920" icon="FaCalendar" range="2023 / 24" />
        <KPICard type="Call Effeciency Rate" value="76%" icon="FaPhoneVolume" range="2023 / 24" />
      </div>
      <div className="flex w-full flex-wrap">
        <div className="w-full md:w-1/2 my-5 md:pe-2">
          <BarChartComponent />
        </div>
        <div className="w-full md:w-1/2 my-5 md:ps-2 h-full">
          <LineChartComponent/>
        </div>
      </div>
      <div>
        <DataTable data={rows} columns={columns}/>
      </div>
    </div>
  )
}

export default AdminPage