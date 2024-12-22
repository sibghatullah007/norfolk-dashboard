import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 border-t-2 border-gray-200">
    <div className='flex items-center justify-center gap-4 p-4'>
        <div>
            <a href="https://www.linkedin.com/company/7185432" target="_blank"><FaLinkedin className="text-[26px] text-blue-800"/></a>
        </div>
        <div>
            <a href="https://twitter.com/RCidale" target="_blank"><FaSquareXTwitter className="text-[26px] text-blue-800"/></a>
        </div>
    </div>
    <div className="text-blue-700 text-sm">All rights reserved @2024 by Norfolk</div>
    </div>
  )
}

export default Footer