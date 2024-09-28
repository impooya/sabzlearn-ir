function MainInfoArticlesSection({ rightContent, leftContent }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-8 mt-4">{rightContent}</div>
            <div className="col-4">{leftContent}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainInfoArticlesSection;
