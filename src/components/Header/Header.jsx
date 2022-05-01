import "./Header.css";
import projects from "../../document/Projects.rar";
import resume from "../../document/Resume.rar";
import resumeSvg from "../../img/Resume.svg";
import projectSvg from "../../img/Portfolio.svg";

const Header = () => {
  return (
    <header>
      <h1>Portfolio of Repyev Denis</h1>
      <a href={resume} download>
        <p>Resume</p>
        <img src={resumeSvg} alt="Resume" />
      </a>
      <a href={projects} download>
        <p>Projects</p>
        <img src={projectSvg} alt="Portfolio" />
      </a>
    </header>
  );
};

export default Header;
