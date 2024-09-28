import { createContext, useState } from "react";

const CourseDetailsContext = createContext();
function CourseDetailsProvider({ children }) {
  const [openCourseDetails, setOpenCourseDetails] = useState(false);
  function openCourseDetailsHandler() {
    setOpenCourseDetails((prev) => !prev);
  }
  function closeCourseDetailsHandler() {
    setOpenCourseDetails(false);
  }
  return (
    <CourseDetailsContext.Provider
      value={{
        openCourseDetailsHandler,
        openCourseDetails,
        closeCourseDetailsHandler,
      }}
    >
      {children}
    </CourseDetailsContext.Provider>
  );
}

export { CourseDetailsContext, CourseDetailsProvider };
