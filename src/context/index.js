'use client'
import React, { createContext, useState, useEffect } from "react";
import { usePathname } from 'next/navigation'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const pathname = usePathname()
  const [notificationNavMenu, setNotificationNavMenu] = useState(false)
  const [notificationNavMenuSub, setNotificationNavMenuSub] = useState(false)
    const truncateText = (text, maxLength) => {
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };  
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
    <AppContext.Provider value={{ pathname, notificationNavMenu, setNotificationNavMenu, notificationNavMenuSub, setNotificationNavMenuSub, truncateText }}>
      {children}
    </AppContext.Provider>
  );
};
