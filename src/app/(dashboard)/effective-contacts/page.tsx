import BarChartEffectiveContact from "@/components/BarChartEffectiveContact"
import KPICard from "@/components/KPICard"
import { DatePickerWithRange } from '@/components/DateRangePicker'
import InputVal from "@/components/Input"
import SelectFilterType from "@/components/SelectFilterType"

const EffectiveContactsPage = () => {
  const rows = [
      { id: 1, contactName: "John Smith", company: "Acme Corp", dateTime: "2024-12-31", duration: "5:23", status: "Effective", actions: "View" },
      { id: 2, contactName: "Sarah Johnson", company: "Tech Solutions", dateTime: "2024-11-30", duration: "3:45", status: "Voicemail", actions: "View" },
      { id: 3, contactName: "Michael Brown", company: "Global Industries", dateTime: "2024-11-28", duration: "4:12", status: "Failed", actions: "View" },
      { id: 4, contactName: "Emily Davis", company: "Innovatech", dateTime: "2024-11-18", duration: "6:10", status: "Effective", actions: "View" },
      { id: 5, contactName: "David Wilson", company: "Bright Future LLC", dateTime: "2024-11-08", duration: "2:50", status: "Voicemail", actions: "View" },
      { id: 6, contactName: "Sophia Martinez", company: "NextGen Solutions", dateTime: "2024-12-11", duration: "5:00", status: "Failed", actions: "View" },
      { id: 7, contactName: "James Lee", company: "Tech World", dateTime: "2024-12-13", duration: "4:05", status: "Effective", actions: "View" },
      { id: 8, contactName: "Olivia Taylor", company: "Visionary Inc", dateTime: "2024-11-30", duration: "3:30", status: "Voicemail", actions: "View" },
      { id: 9, contactName: "Daniel Garcia", company: "Global Ventures", dateTime: "2024-12-28", duration: "4:45", status: "Failed", actions: "View" },
      { id: 10, contactName: "Michael Brown", company: "Global Industries", dateTime: "2024-12-28", duration: "4:12", status: "Effective", actions: "View" },
      { id: 11, contactName: "Emily Davis", company: "Innovatech", dateTime: "2024-11-18", duration: "6:10", status: "Effective", actions: "View" },
      { id: 12, contactName: "David Wilson", company: "Bright Future LLC", dateTime: "2024-11-08", duration: "2:50", status: "Voicemail", actions: "View" },
      { id: 13, contactName: "Sophia Martinez", company: "NextGen Solutions", dateTime: "2024-12-11", duration: "5:00", status: "Failed", actions: "View" },
      { id: 14, contactName: "James Lee", company: "Tech World", dateTime: "2024-12-13", duration: "4:05", status: "Effective", actions: "View" },
      { id: 15, contactName: "Olivia Taylor", company: "Visionary Inc", dateTime: "2024-12-24", duration: "3:30", status: "Voicemail", actions: "View" },
      { id: 16, contactName: "Daniel Garcia", company: "Global Ventures", dateTime: "2024-12-17", duration: "4:45", status: "Failed", actions: "View" },
  ];
  return (
    <div className='p-4 flex flex-col'>
      <div className="w-full flex flex-wrap gap-4 shadow-lg border-2 border-gray-100 rounded-lg p-4 my-4">
        <div className="w-full md:w-1/4 px-0 md:px-1 mx-0">
          <DatePickerWithRange />
        </div>
        <div className="w-full md:w-1/4 px-0 md:px-1 mx-0">
          {/* <InputVal /> */}
          <SelectFilterType />
        </div>
      </div>
      <div className="w-full flex gap-4 justify-between flex-wrap">
        <KPICard type="Total Effective Contacts" value="170" icon="FaUsers" range="2023 / 24" />
        <KPICard type="Success Rate" value="76.8%" icon="" range="2023 / 24" />
        <KPICard type="Average Daily Contacts" value="156" icon="IoToday" range="2023 / 24" />
      </div>
      <div className="flex flex-col w-full flex-wrap bg-blue-100 shadow-lg rounded-lg border my-5 p-2">
        <div className="mb-5 w-full rounded-lg bg-white p-3 py-4 flex flex-col">
          <span className="text-blue-950 font-semibold">
            Meetings Status Distribution
          </span>
          <span className="text-sm text-gray-400">
            January - June 2024
          </span>
        </div>
        <div className="w-full md:w-1/2">
          <BarChartEffectiveContact rows={rows} />
        </div>
        <div className="w-full rounded-lg bg-white p-3 py-4 flex flex-col">
          <span className="text-sm text-gray-800">
            Showing total meetings for the last 6 months.
          </span>
        </div>
      </div>
    </div>
  )
}

export default EffectiveContactsPage