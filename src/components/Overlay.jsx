import { useContext } from "react";
import { createPortal } from "react-dom";
import { OverlayContext } from "../contexts/OverlayState";
import { SidebarContext } from "../contexts/sidebarState";
function Overlay() {
  const overlayConfig = useContext(OverlayContext);
  const sidebarConfig = useContext(SidebarContext);
  return (
    <>
      {createPortal(
        <div
          className={`bg-black/30 inset-0 fixed z-[99] h-screen w-screen ${
            overlayConfig.isShowOverLay ? null : "hidden"
          }`}
          onClick={() => {
            overlayConfig.preventShowOverLayHandler();
            sidebarConfig.sidebarCloseHandler();
          }}
        ></div>,
        document.getElementById("overlay")
      )}
    </>
  );
}

export default Overlay;
