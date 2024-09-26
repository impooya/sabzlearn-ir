import BreadCrump from "../components/BreadCrump";
import CourseInfoBox from "../components/CourseInfoBox";
import CourseProgress from "../components/CourseProgress";
import MainInfoCourse from "../components/MainInfoCourse";
import MainInfoCoursesSection from "../components/MainInfoCoursesSection";

function CourseInfo() {
  return (
    <>
      <BreadCrump />
      <MainInfoCourse />
      <MainInfoCoursesSection
        rightContent={
          <>
            <CourseInfoBox />
            <CourseProgress />
          </>
        }
      />
    </>
  );
}

export default CourseInfo;
