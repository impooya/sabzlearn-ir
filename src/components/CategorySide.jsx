import { useContext } from "react";
import { OverlayContext } from "../contexts/OverlayState";
import { IoMdClose } from "react-icons/io";
import { CategoryContext } from "../contexts/CategorySideState";

function CategorySide() {
  const overlayConfig = useContext(OverlayContext);
  const categoryConfig = useContext(CategoryContext);
  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-[9999] bottom-0 h-auto ${
          categoryConfig.isOpenCategorySide ? "" : "translate-x-[250px]"
        } transition-all`}
      >
        <section className="bg-white h-full w-56 pt-3 px-5 flex flex-col items-start justify-start text-dark-primery lg:hidden">
          <div className="flex justify-between items-center w-full border-b border-b-zinc-500/20 pb-2">
            <img src="/images/logo/Logo.png" alt="Logo" className="h-10 w-16" />
            <button
              type="button"
              onClick={() => {
                categoryConfig.setIsOpenCategorySide(false);
                overlayConfig.setIsShowOverLay(false);
              }}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="w-full mt-3">
            <ul className="flex flex-col justify-start items-start gap-3">
              {[
                { title: "مرتب سازی پیش فرض", id: "-1" },
                {
                  title: "مرتب سازی بر اساس محبوبیت",
                  id: "1",
                },
                {
                  title: "مرتب سازی بر اساس امتیاز",
                  id: "2",
                },
                {
                  title: "مرتب سازی بر اساس آخرین",
                  id: "3",
                },
                {
                  title: "مرتب سازی بر اساس ارزان ترین",
                  id: "4",
                },
                { title: "مرتب سازی بر اساس گران ترین", id: "5" },
              ].map((item, index) => (
                <ul key={index} className="w-full">
                  <span className="w-full text-sm">
                    <a href="#">{item.title}</a>
                  </span>
                </ul>
              ))}
            </ul>
          </nav>
        </section>
      </aside>
    </>
  );
}

export default CategorySide;
