import { createContext, useState } from "react";

// Create the sidebar context
export const SidebarContext = createContext();

// SidebarProvider component
function SidebarProvider({ children }) {
  return (
    <SidebarContext.Provider value={null}>{children}</SidebarContext.Provider>
  );
}

export default SidebarProvider;
