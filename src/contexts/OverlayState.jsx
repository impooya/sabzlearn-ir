/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const OverlayContext = createContext();

function OverlayProvider({ children }) {
  const [isShowOverLay, setIsShowOverLay] = useState(false);
  function preventShowOverLayHandler() {
    setIsShowOverLay((prev) => !prev);
  }
  return (
    <OverlayContext.Provider
      value={{ isShowOverLay, setIsShowOverLay, preventShowOverLayHandler }}
    >
      {children}
    </OverlayContext.Provider>
  );
}

export { OverlayProvider, OverlayContext };
