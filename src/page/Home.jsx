import About from "../components/About";
import Articles from "../components/Articles";
import Courses from "../components/Courses";
import Landing from "../components/Landing";
import Main from "../components/Main";
import PopulerCourses from "../components/PopulerCourses";
import PreSaleCourses from "../components/PreSaleCourses";
export default function Home() {
  return (
    <>
      <Main>
        <Landing />
        <Courses />
        <About />
        <PopulerCourses />
        <PreSaleCourses />
        <Articles />
      </Main>
    </>
  );
}
