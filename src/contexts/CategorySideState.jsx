import { createContext, useState } from "react";

const CategoryContext = createContext();
function CategorySideProvider({ children }) {
  const [isOpenCategorySide, setIsOpenCategorySide] = useState(false);
  function openCategorySideHandler() {
    setIsOpenCategorySide((prev) => !prev);
  }

  return (
    <CategoryContext.Provider
      value={{
        isOpenCategorySide,
        openCategorySideHandler,
        setIsOpenCategorySide,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export { CategoryContext, CategorySideProvider };
