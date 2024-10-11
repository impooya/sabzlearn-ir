import { useContext } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { SidebarContext } from "../contexts/sidebarState";
import { OverlayContext } from "../contexts/OverlayState";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function SideBar() {
  const sidebarConfig = useContext(SidebarContext);
  const overlayConfig = useContext(OverlayContext);

  const handleToggle = (id) => {
    // اگر منوی جدید باز شود، منوی قبلی بسته شود
    if (sidebarConfig.getIdItemForSideBar === id) {
      // اگر منو قبلاً باز بود، آن را ببند
      sidebarConfig.setGetIdItemForSideBar(null);
    } else {
      // منوی جدید را باز کن
      sidebarConfig.setGetIdItemForSideBar(id);
    }
  };
  const getAllMenus = async () => {
    const menus = await axios.get("http://localhost:4000/v1/menus");
    const menusData = await menus.data;
    return menusData;
  };
  const {
    data: menus,
    isError: isMenusErr,
    isLoading: isMenusLoading,
  } = useQuery({
    queryKey: ["menus-sidebar"],
    queryFn: getAllMenus,
  });
  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-[9999] bottom-0 h-auto ${
          sidebarConfig.isOpenSideBar ? "" : "translate-x-[250px]"
        } transition-all`}
      >
        <section className="bg-white h-full w-56 pt-3 px-5 flex flex-col items-start justify-start text-dark-primery lg:hidden">
          <div className="flex justify-between items-center w-full border-b border-b-zinc-500/20 pb-2">
            <img src="/images/logo/Logo.png" alt="Logo" className="h-10 w-16" />
            <button
              type="button"
              onClick={() => {
                sidebarConfig.sidebarCloseHandler();
                overlayConfig.setIsShowOverLay(false);
              }}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="w-full mt-3">
            {isMenusLoading ? (
              <span>در حال بارگذاری...</span>
            ) : isMenusErr ? (
              <span>خطایی رخ داد...</span>
            ) : (
              <ul className="flex flex-col justify-start items-start gap-3">
                <a href="#">صفحه اصلی</a>
                {menus?.map((menu) => (
                  <li key={menu._id} className="w-full group">
                    <span className="flex justify-between items-center gap-1 w-full">
                      <a href="#">{menu.title}</a>
                      {menu.submenus && (
                        <IoIosArrowDown
                          onClick={() => handleToggle(menu._id)}
                          id={menu._id}
                          aria-expanded={
                            sidebarConfig.getIdItemForSideBar === menu._id
                          }
                          className="cursor-pointer"
                        />
                      )}
                    </span>
                    {menu.submenus && (
                      <ul
                        className={`flex flex-col gap-3 justify-start items-start pr-6 mt-3 ${
                          sidebarConfig.getIdItemForSideBar === menu._id
                            ? "max-h-64 overflow-visible"
                            : "max-h-0 overflow-hidden"
                        } transition-all`}
                      >
                        {menu.submenus.map((submenu) => (
                          <li key={submenu._id}>
                            <a href="#">{submenu.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </section>
      </aside>
    </>
  );
}

export default SideBar;
