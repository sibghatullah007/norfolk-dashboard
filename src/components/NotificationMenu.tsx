'use client'
import { useContext, useState } from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { AppContext } from '../context/index'
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";


const NotificationMenu = () => {
    const { notificationNavMenu, setNotificationNavMenu, notificationNavMenuSub, setNotificationNavMenuSub, truncateText } = useContext(AppContext)
    const [notificationsData, setNotificationsData] = useState([
        {
            title: "New Email is here",
            subject: "A new email has been received from no reply means you can't reply to this source",
            time: "16 Dec 2024",
            readStatus: false
        },
        {
            title: "New Email is here",
            subject: "A new email has been received from no reply means you can't reply to this source",
            time: "16 hours Ago",
            readStatus: false
        },
        {
            title: "New Email is here",
            subject: "A new email has been received from no reply means you can't reply to this source",
            time: "12 min Ago",
            readStatus: false
        },
        {
            title: "New Email is here",
            subject: "A new email has been from",
            time: "16 sec Ago",
            readStatus: false
        },
        {
            title: "New Email is here",
            subject: "A new email has been received from no reply means you can't reply to this source",
            time: "16 hours Ago",
            readStatus: false
        },
        {
            title: "New Email is here",
            subject: "A new email has been received from no reply means you can't reply to this source",
            time: "12 min Ago",
            readStatus: true
        },
        {
            title: "New Email is here",
            subject: "A new email has been received",
            time: "16 sec Ago",
            readStatus: false
        }
    ])
    const handleNotificationClick = (index) => {
        const updatedNotifications = notificationsData.map((notification, i) =>
            i === index ? { ...notification, readStatus: true } : notification
        );
        setNotificationsData(updatedNotifications);
    };
    return (
        <div className={`absolute top-8 -left-24 ${notificationNavMenu ? 'flex flex-col' : 'hidden'} max-h-80 overflow-auto`}>
            <div id='targeted' className='flex justify-between items-center bg-blue-100 w-60 p-2 border-b-2 border-blue-300 z-10 sticky top-0'>
                <div className='flex gap-2 items-center cursor-pointer'
                    onClick={() => {
                        setNotificationNavMenu(!notificationNavMenu)
                        const updatedNotifications = notificationsData.map((notification) => ({
                            ...notification,
                            readStatus: true,
                        }));

                        setNotificationsData(updatedNotifications);
                        console.log(updatedNotifications);
                    }} >
                    <MdMarkEmailRead />
                    <span className='text-sm text-blue-950 underline decoration-3'>Mark all as read</span>
                </div>
                <div className='relative text-sm text-blue-950'>
                    <SlOptionsVertical className='cursor-pointer' onClick={() => { setNotificationNavMenuSub(!notificationNavMenuSub) }} />
                    <div className={`absolute -left-44 z-20 ${notificationNavMenuSub ? 'flex' : 'hidden'}`}>
                        <div id='targetedSub' className='flex justify-between items-center bg-blue-200 p-2 pe-10 border-b-2 border-blue-300'>
                            <div onClick={() => { setNotificationNavMenuSub(!notificationNavMenuSub) }}>
                                <span className='text-sm text-blue-950 underline decoration-3 cursor-pointer' 
                                onClick={() => { 
                                    setNotificationNavMenu(!notificationNavMenu) 
                                    setNotificationsData([])
                                }} >Clear all notifications</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-60'>
                {   notificationsData.length>0?
                    notificationsData.map((notification, index) => (
                        <div className={`flex items-center gap-2 ${notification.readStatus ? 'bg-blue-100' : 'bg-blue-200'} p-2 relative border-b-2 border-blue-300 cursor-pointer`} key={index} onClick={()=>handleNotificationClick(index)}>
                            <div className='bg-blue-300 p-2 rounded-full'>
                                <MdOutlineMessage className='text-xl' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-blue-950 text-sm'>{truncateText(notification.title, 14)}</div>
                                <div className='text-blue-800 text-xs'>{truncateText(notification.subject, 36)}</div>
                            </div>
                            <div className='text-blue-950 text-xs absolute top-1 right-1'>{notification.time}</div>
                        </div>
                    )):<div className='flex items-center justify-center bg-blue-100 text-sm py-5 text-blue-950'> No Notification </div>
                }
            </div>
        </div>
    )
}

export default NotificationMenu