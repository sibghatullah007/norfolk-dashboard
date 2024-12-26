import BarChartEffectiveContact from "@/components/BarChartEffectiveContact"
import KPICard from "@/components/KPICard"
import { DatePickerWithRange } from '@/components/DateRangePicker'
import SelectFilterType from "@/components/SelectFilterType"

const EffectiveContactsPage = () => {
  const rows = [
    {
      "id": 1,
      "contactName": "Emily Davis",
      "company": "Global Industries",
      "dateTime": "2024-08-17",
      "duration": "3:09",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 10,
      "contactName": "Sarah Johnson",
      "company": "Tech World",
      "dateTime": "2024-11-18",
      "duration": "5:42",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 11,
      "contactName": "Mia Anderson",
      "company": "Meridian Group",
      "dateTime": "2024-09-12",
      "duration": "1:31",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 13,
      "contactName": "Ava Rodriguez",
      "company": "Stellar Enterprises",
      "dateTime": "2024-12-23",
      "duration": "4:49",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 14,
      "contactName": "Michael Brown",
      "company": "Vanguard Technologies",
      "dateTime": "2024-09-20",
      "duration": "2:56",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 15,
      "contactName": "Jacob Hernandez",
      "company": "Visionary Inc",
      "dateTime": "2024-04-15",
      "duration": "1:33",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 16,
      "contactName": "Emily Davis",
      "company": "Stellar Enterprises",
      "dateTime": "2024-02-14",
      "duration": "2:19",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 17,
      "contactName": "Sarah Johnson",
      "company": "Horizon Dynamics",
      "dateTime": "2024-09-20",
      "duration": "2:54",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 20,
      "contactName": "Ava Rodriguez",
      "company": "Ascend Enterprises",
      "dateTime": "2024-01-16",
      "duration": "1:45",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 21,
      "contactName": "Evelyn Harris",
      "company": "Pinnacle Group",
      "dateTime": "2024-10-22",
      "duration": "3:47",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 23,
      "contactName": "Michael Brown",
      "company": "NextGen Solutions",
      "dateTime": "2024-02-11",
      "duration": "4:05",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 27,
      "contactName": "Evelyn Harris",
      "company": "Innovatech",
      "dateTime": "2024-01-18",
      "duration": "4:50",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 28,
      "contactName": "Charlotte Thomas",
      "company": "Global Industries",
      "dateTime": "2024-06-18",
      "duration": "1:05",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 29,
      "contactName": "Benjamin Taylor",
      "company": "Nova Technologies",
      "dateTime": "2024-06-22",
      "duration": "3:33",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 30,
      "contactName": "Mia Anderson",
      "company": "Tech World",
      "dateTime": "2024-03-14",
      "duration": "3:47",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 33,
      "contactName": "Benjamin Taylor",
      "company": "Nova Technologies",
      "dateTime": "2024-11-13",
      "duration": "3:35",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 34,
      "contactName": "Alexander White",
      "company": "Acme Corp",
      "dateTime": "2024-04-06",
      "duration": "2:18",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 35,
      "contactName": "Abigail Moore",
      "company": "Visionary Inc",
      "dateTime": "2024-05-05",
      "duration": "4:10",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 37,
      "contactName": "Ava Rodriguez",
      "company": "Ascend Enterprises",
      "dateTime": "2024-09-24",
      "duration": "2:28",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 38,
      "contactName": "Michael Brown",
      "company": "Tech World",
      "dateTime": "2024-10-30",
      "duration": "3:30",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 39,
      "contactName": "Charlotte Thomas",
      "company": "Stellar Enterprises",
      "dateTime": "2024-12-25",
      "duration": "4:19",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 40,
      "contactName": "Evelyn Harris",
      "company": "Global Industries",
      "dateTime": "2024-03-15",
      "duration": "5:22",
      "status": "Voicemail",
      "actions": "View"
    },
    {
      "id": 41,
      "contactName": "Olivia Taylor",
      "company": "Innovatech",
      "dateTime": "2024-11-26",
      "duration": "2:46",
      "status": "Failed",
      "actions": "View"
    },
    {
      "id": 42,
      "contactName": "Daniel Garcia",
      "company": "Pinnacle Group",
      "dateTime": "2024-12-21",
      "duration": "1:59",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 43,
      "contactName": "Harper Martin",
      "company": "Global Industries",
      "dateTime": "2024-02-04",
      "duration": "2:00",
      "status": "Failed",
      "actions": "View"
    },
    {
      "id": 44,
      "contactName": "Emily Davis",
      "company": "Apex Innovations",
      "dateTime": "2024-01-30",
      "duration": "2:07",
      "status": "Effective",
      "actions": "View"
    },
    {
      "id": 45,
      "contactName": "Mia Anderson",
      "company": "Global Ventures",
      "dateTime": "2024-12-03",
      "duration": "2:11",
      "status": "Failed",
      "actions": "View"
    },
    {
      "id": 46,
      "contactName": "Daniel Garcia",
      "company": "Global Ventures",
      "dateTime": "2024-03-18",
      "duration": "5:04",
      "status": "Failed",
      "actions": "View"
    },
    {
      "id": 47,
      "contactName": "Mia Anderson",
      "company": "Meridian Group",
      "dateTime": "2024-09-23",
      "duration": "1:19",
      "status": "Failed",
      "actions": "View"
    },
    {
      "id": 48,
      "contactName": "Ava Rodriguez",
      "company": "Zenith Solutions",
      "dateTime": "2024-03-08",
      "duration": "3:02",
      "status": "Failed",
      "actions": "View"
    }
  ]
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