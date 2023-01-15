import Logo from "./Logo";
import Navigation from "./Navigation";
import { NavLink, Outlet } from "react-router-dom";
import one from "..//images/one.jpg";
import two from "..//images/two.jpg";
import arrow from "..//images/arrow-right.png";
export default function Header(props) {
  return (
    <>
      <header>
        <Logo />
        <Navigation
          handleClick={props.handleClick}
          changeHidden={props.changeHidden}
        />
      </header>
      <section
        className="hidden"
        style={{ display: props.isclickedCoursesBox ? "block" : "none" }}
      >
        <NavLink to="/courses" onClick={props.changeHidden}>
          <div className="course">
            <img className="course-pic" src={one} alt="" />
            <h2>Front end web development</h2>
            <img className="arrow-pic" src={arrow} alt="" />
          </div>
          <div className="course">
            <img className="course-pic" src={two} alt="" />
            <h2>Front end web development</h2>
            <img className="arrow-pic" src={arrow} alt="" />
          </div>
        </NavLink>
      </section>
      <Outlet />
    </>
  );
}
