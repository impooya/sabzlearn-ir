function MainInfoCoursesSection({ leftContent, rightContent }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="flex gap-x-9 justify-center">
            <div>
              <div className="course">{rightContent}</div>
            </div>
            <div className="flex-none w-1/3  ">
              <div className="courses-info top-6 sticky ">{leftContent}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainInfoCoursesSection;
