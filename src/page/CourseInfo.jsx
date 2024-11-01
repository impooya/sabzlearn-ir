import { useIsFetching } from "@tanstack/react-query";
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
import { useContext } from "react";
import { singleCourseDataContext } from "../contexts/getSingleCourseData";
import CommentsTextArea from "../components/CommentsTextArea";

function CourseInfo() {
  const isFetching = useIsFetching({ queryKey: [["single-course-info"]] });
  const { isError } = useContext(singleCourseDataContext);
  if (isError) {
    return (
      <span>
        خطا در بارگذاری اطلاعات دوره. دوره ای پیدا نشد لطفا برای دسترسی مجدد به
        سایت رفرش کنید
      </span>
    );
  }
  return (
    <>
      {isFetching ? (
        <span>در حال بروزرسانی...</span>
      ) : (
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
                <CommentsTextArea />
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
      )}
    </>
  );
}

export default CourseInfo;
