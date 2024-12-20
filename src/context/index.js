'use client'
import React, { createContext } from "react";
import { usePathname } from 'next/navigation'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const pathname = usePathname()
    return (
    <AppContext.Provider value={{pathname }}>
      {children}
    </AppContext.Provider>
  );
};
