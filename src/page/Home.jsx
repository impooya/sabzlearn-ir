import About from "../components/About";
import Articles from "../components/Articles";
import Landing from "../components/Landing";
import LatestCourses from "../components/LatestCourses";
import Main from "../components/Main";
import PopulerCourses from "../components/PopulerCourses";
import PreSaleCourses from "../components/PreSaleCourses";
export default function Home() {
  return (
    <>
      <Main>
        <Landing />
        <LatestCourses />
        <About />
        <PopulerCourses />
        <PreSaleCourses />
        <Articles />
      </Main>
    </>
  );
}
