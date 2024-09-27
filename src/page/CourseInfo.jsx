import BreadCrump from "../components/BreadCrump";
import CourseChapters from "../components/CourseChapters";
import CourseInfoBox from "../components/CourseInfoBox";
import CourseProgress from "../components/CourseProgress";
import CourseStats from "../components/CourseStats";
import IntroductionCourse from "../components/IntroductionCourse";
import MainInfoCourse from "../components/MainInfoCourse";
import MainInfoCoursesSection from "../components/MainInfoCoursesSection";
import RelatedCourses from "../components/RelatedCourses";
import ShortLink from "../components/ShortLink";
import TeacherDetails from "../components/TeacherDetails";
import TopBanner from "../components/TopBanner";

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
        leftContent={
          <>
            <TopBanner />
            <CourseStats />
            <ShortLink />
            <CourseChapters />
            <RelatedCourses />
          </>
        }
      />
    </>
  );
}

export default CourseInfo;
