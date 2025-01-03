'use client'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import NotificationMenu from './NotificationMenu';
import { useContext } from 'react';
import {AppContext} from '../context/index'

const Navbar = () => {
      const {notificationNavMenu, setNotificationNavMenu, truncateText, unreadNotification,notificationsData}  = useContext(AppContext)
  return (
    <div className='flex items-center justify-end md:justify-between p-4 shadow-sm'>
      <div className="hidden md:flex items-center bg-white p-2 border rounded-full">
        <FaSearch className='text-blue-500' />
        <input type="search" placeholder='Search...' className='px-2 focus:outline-none focus:border-0' />
      </div>
      <div className='flex items-center gap-5'>
        <div className='relative bg-blue-200 rounded-full p-1 hover:bg-blue-300'>
          <FaBell className='text-xl text-blue-500 cursor-pointer'  onClick={()=>{setNotificationNavMenu(!notificationNavMenu)}}/>
          <span className={`absolute bg-red-600 text-white top-0 right-0 p-1 rounded-full ${notificationsData.length>0 && unreadNotification.includes(true)?'block':'hidden'}`}></span>
          <NotificationMenu/>
        </div>
        <div className='flex gap-2 items-center cursor-pointer'>
          <div className='flex flex-col -gap-1'>
            <span id="nav-user-name" className="text-sm">
              {truncateText('User Name', 8)}
            </span>
            <span id="nav-user-role" className="text-xs text-gray-500">
              {truncateText('User Role', 8)}
            </span>
          </div>
          <Image src="/user-default.png" alt="User" width={32} height={32} />
        </div>
      </div>
    </div>
  )
}

export default Navbar