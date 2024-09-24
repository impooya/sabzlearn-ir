import { createContext, useState } from "react";

// Create the sidebar context
const SidebarContext = createContext();

// SidebarProvider component
function SidebarProvider({ children }) {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSideBarItems, setIsOpenSideBarItems] = useState(false);
  const [getIdItemForSideBar, setGetIdItemForSideBar] = useState("");
  function sidebarOpenHnadler() {
    setIsOpenSideBar((prev) => !prev);
  }
  function sidebarCloseHandler() {
    setIsOpenSideBar((prev) => !prev);
  }
  function sidebarItemsOpenHandler() {
    setIsOpenSideBarItems((prev) => !prev);
  }
  return (
    <SidebarContext.Provider
      value={{
        isOpenSideBar,
        isOpenSideBarItems,
        sidebarItemsOpenHandler,
        sidebarOpenHnadler,
        sidebarCloseHandler,
        getIdItemForSideBar,
        setGetIdItemForSideBar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };
