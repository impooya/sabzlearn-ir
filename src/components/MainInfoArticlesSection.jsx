function MainInfoArticlesSection({ rightContent, leftContent }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="flex gap-x-9 justify-center">
            <div className="  mt-4">{rightContent}</div>
            <div className="flex-none w-1/3  hidden lg:block sticky">
              <div className="courses-info top-6 sticky ">{leftContent}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainInfoArticlesSection;
