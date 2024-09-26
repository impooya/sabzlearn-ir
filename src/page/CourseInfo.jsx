import BreadCrump from "../components/BreadCrump";
import CourseInfoBox from "../components/CourseInfoBox";
import CourseProgress from "../components/CourseProgress";
import IntroductionCourse from "../components/IntroductionCourse";
import MainInfoCourse from "../components/MainInfoCourse";
import MainInfoCoursesSection from "../components/MainInfoCoursesSection";
import TeacherDetails from "../components/TeacherDetails";

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
            <IntroductionCourse />
            <TeacherDetails />
          </>
        }
      />
    </>
  );
}

export default CourseInfo;
