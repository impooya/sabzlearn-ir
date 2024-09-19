import { useContext } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { SidebarContext } from "../contexts/sidebarState";

function SideBar() {
  const sidebarConfig = useContext(SidebarContext);

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

  return (
    <section className="bg-white h-full w-56 pt-3 px-5 flex flex-col items-start justify-start text-dark-primery md:hidden">
      <div className="flex justify-between items-center w-full border-b border-b-zinc-500/20 pb-2">
        <img src="/images/logo/Logo.png" alt="Logo" className="h-10 w-16" />
        <button type="button" onClick={sidebarConfig.sidebarCloseHandler}>
          <IoMdClose />
        </button>
      </div>
      <nav className="w-full mt-3">
        <ul className="flex flex-col justify-start items-start gap-3">
          {[
            { title: "صفحه اصلی", id: "home" },
            {
              title: "فرانت اند",
              id: "front-end",
              items: [
                "آموزش Html",
                "آموزش Css",
                "آموزش جاوا اسکریپت",
                "آموزش Flex Box",
                "آموزش جامع ری اکت",
              ],
            },
            {
              title: "امنیت",
              id: "security",
              items: [
                "آموزش کالی لینوکس",
                "آموزش پایتون سیاه",
                "آموزش جاوا اسکریپت سیاه",
                "اموزش شبکه",
              ],
            },
            {
              title: "مقالات",
              id: "articles",
              items: ["توسعه وب", "جاوا اسکریپت", "فرانت اند"],
            },
            {
              title: "پایتون",
              id: "python",
              items: [
                "دوره متخصص پایتون",
                "دوره هوش مصنوعی با پایتون",
                "دوره متخصص جنگو",
              ],
            },
            { title: "مهارت های نرم", id: "soft-skills" },
          ].map((item, index) => (
            <li key={index} className="w-full group">
              <span className="flex justify-between items-center gap-1 w-full">
                <a href="#">{item.title}</a>
                {item.items && (
                  <IoIosArrowDown
                    onClick={() => handleToggle(item.id)}
                    id={item.id}
                    aria-expanded={
                      sidebarConfig.getIdItemForSideBar === item.id
                    }
                    className="cursor-pointer"
                  />
                )}
              </span>
              {item.items && (
                <ul
                  className={`flex flex-col gap-3 justify-start items-start pr-6 mt-3 ${
                    sidebarConfig.getIdItemForSideBar === item.id
                      ? "h-[190px] overflow-visible"
                      : "h-0 overflow-hidden"
                  } transition-all`}
                >
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="#">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default SideBar;
