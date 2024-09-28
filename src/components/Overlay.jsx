import { useContext } from "react";
import { createPortal } from "react-dom";
import { OverlayContext } from "../contexts/OverlayState";
import { SidebarContext } from "../contexts/sidebarState";
import { CategoryContext } from "../contexts/CategorySideState";
import { WichSideBarContext } from "../contexts/WichSideBarState";
import { CourseDetailsContext } from "../contexts/CourseDetailsState";

function Overlay() {
  const overlayConfig = useContext(OverlayContext);
  const sidebarConfig = useContext(SidebarContext);
  const categoryConfig = useContext(CategoryContext);
  const courseDetailsConfig = useContext(CourseDetailsContext);
  const wichSideBarConfig = useContext(WichSideBarContext);
  return (
    <>
      {createPortal(
        <div
          className={`bg-black/30 inset-0 fixed z-[99] h-screen w-screen ${
            overlayConfig.isShowOverLay ? null : "hidden"
          }`}
          onClick={() => {
            overlayConfig.preventShowOverLayHandler();
            wichSideBarConfig.wichSideBar === "menu-sidebar" &&
            wichSideBarConfig.wichSideBar !== ""
              ? sidebarConfig.sidebarCloseHandler()
              : wichSideBarConfig.wichSideBar === "course-details" &&
                wichSideBarConfig.wichSideBar !== ""
              ? courseDetailsConfig.closeCourseDetailsHandler()
              : categoryConfig.closeCategorySideHandler();
          }}
        ></div>,
        document.getElementById("overlay")
      )}
    </>
  );
}

export default Overlay;
