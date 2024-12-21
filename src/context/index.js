'use client'
import React, { createContext, useState, useEffect } from "react";
import { usePathname } from 'next/navigation'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const pathname = usePathname()
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
  const [notificationNavMenu, setNotificationNavMenu] = useState(false)
  const [notificationNavMenuSub, setNotificationNavMenuSub] = useState(false)
  const [unreadNotification, setUnreadNotification] = useState(notificationsData.map(notification=>{
    if (notification.readStatus==false) {
      return true
    }else{
      return false
    }
  }))
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  useEffect(()=>{
    notificationsData.map(notification=>{
      setUnreadNotification(notificationsData.map(notification=>{
        if (notification.readStatus==false) {
          return true
        }else{
          return false
        }
      }))
    })
  },[notificationsData])
  console.log(unreadNotification)
  useEffect(() => {
    const handleClick = (event) => {
      const targetElement = document.querySelector('#targeted');
      console.log(event.target == targetElement)
      if (targetElement && targetElement.contains(event.target)) {
        setNotificationNavMenu(true);
      } else {
        setNotificationNavMenu(false);
        setNotificationNavMenuSub(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [notificationNavMenu, setNotificationNavMenu]);
  return (
    <AppContext.Provider value={{ pathname,
     notificationNavMenu,
     setNotificationNavMenu,
     notificationNavMenuSub,
     setNotificationNavMenuSub,
     truncateText,
     notificationsData,
     setNotificationsData,
     unreadNotification, 
     setUnreadNotification, 
     }}>
      {children}
    </AppContext.Provider>
  );
};
