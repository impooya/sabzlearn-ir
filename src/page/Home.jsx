import About from "../components/About";
import Courses from "../components/Courses";
import Landing from "../components/Landing";
import Main from "../components/Main";
import PopulerCourses from "../components/PopulerCourses";
export default function Home() {
  return (
    <>
      <Main>
        <Landing />
        <Courses />
        <About />
        <PopulerCourses />
      </Main>
    </>
  );
}
