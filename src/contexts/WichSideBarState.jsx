import { createContext, useState } from "react";

const WichSideBarContext = createContext();
function WichSideBarProvider({ children }) {
  const [wichSideBar, setWichSideBar] = useState("");
  return (
    <>
      <WichSideBarContext.Provider value={{ wichSideBar, setWichSideBar }}>
        {children}
      </WichSideBarContext.Provider>
    </>
  );
}

export { WichSideBarProvider, WichSideBarContext };
