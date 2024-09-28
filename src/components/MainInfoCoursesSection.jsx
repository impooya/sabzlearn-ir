import { IoMdInformationCircleOutline } from "react-icons/io";

function MainInfoCoursesSection({ leftContent, rightContent }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="flex gap-x-9 justify-center">
            <div>
              <div className="course">{rightContent}</div>
            </div>
            <div className="flex-none w-1/3  hidden lg:block">
              <div className="courses-info top-6 sticky ">{leftContent}</div>
            </div>
          </div>
        </div>
      </main>
      <aside className="block lg:hidden">
        <section className="left-0 top-1/2 fixed z-[9999] flex justify-center items-center">
          <div className="w-10 h-12 bg-slate-800 shadow-shade-primery rounded-s-4xl flex justify-start items-center pr-1">
            <button type="button" className="text-4xl text-green-primery">
              <IoMdInformationCircleOutline />
            </button>
          </div>
        </section>
        <div className="  w-[300px]  h-[650px] bg-white fixed top-0 left-0 right-0 bottom-0 my-auto mx-auto rounded-xl ">
          <div className="courses-info  overflow-scroll h-[600px] ">
            {leftContent}
          </div>
        </div>
      </aside>
    </>
  );
}

export default MainInfoCoursesSection;
