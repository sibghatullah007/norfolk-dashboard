import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import { AppProvider } from "../../context/index"
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the desired weights
});
export default function DashboardLayout({ children }) {
  return (
    <AppProvider>
      <NextTopLoader/>
      <div
        className={`h-screen flex ${poppins.variable} antialiased`}>
        <div className=" w-[14%] md:w-[8%] lg:w-[16%]  xl:w-[14%] p-2 lg:p-2">
          <Link href="/admin" className="flex items-center justify-center lg:justify-start gap-2">
            <Image src="/logo-blue.png" alt="Logo" width={32} height={32} />
            <span className="hidden lg:block text-lg font-bold text-blue-950">Norfolk</span>
          </Link>
          <Menu />
        </div>
        <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll-y">
          <Navbar />
          {children}
        </div>
      </div>
    </AppProvider>
  );
}