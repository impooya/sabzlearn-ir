function MainInfoCoursesSection({ leftContent, rightContent }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="course">{rightContent}</div>
            </div>
            <div className="col-4">{leftContent}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainInfoCoursesSection;
