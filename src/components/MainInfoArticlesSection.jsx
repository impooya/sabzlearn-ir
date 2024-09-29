function MainInfoArticlesSection({ rightContent, leftContent }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className=" flex flex-col lg:flex-row gap-x-9 justify-center">
            <div className="  mt-4">{rightContent}</div>
            <div className=" lg:flex-none lg:w-1/3  lg:sticky">
              <div className="courses-info top-6 sticky grid grid-cols-1 md:grid-cols-2 gap-x-3 lg:block">
                {leftContent}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainInfoArticlesSection;
