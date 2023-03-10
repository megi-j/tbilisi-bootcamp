import "./components/reset.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Tutors from "./Tutors";
import CoursesBox from "./components/CoursesBox";
import { useState } from "react";
import Graduates from "./components/Graduates";
import styled from "styled-components";
function App() {
  const [isclickedCoursesBox, setIsClickedCoursesBox] = useState(false);

  function handleClick() {
    setIsClickedCoursesBox(!isclickedCoursesBox);
  }
  function changeHidden() {
    setIsClickedCoursesBox(false);
  }
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              handleClick={handleClick}
              isclickedCoursesBox={isclickedCoursesBox}
              changeHidden={changeHidden}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/graduates" element={<Graduates />} />
        </Route>
      </Routes>

      <Footer />
    </Container>
  );
}

export default App;
const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`;
