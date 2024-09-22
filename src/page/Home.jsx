import About from "../components/About";
import Courses from "../components/Courses";
import Landing from "../components/Landing";
import Main from "../components/Main";
export default function Home() {
  return (
    <>
      <Main>
        <Landing />
        <Courses />
        <About />
      </Main>
    </>
  );
}
