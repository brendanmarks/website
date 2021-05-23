import React, { Component } from "react";
import "./CSS/App.css";
import resume from "./Images/BrendanMarksResume2021.pdf";
import resumeIcon from "./Images/resume.png";
import githubIcon from "./Images/github.png";
import linkedinIcon from "./Images/linkedin.png";
import emailIcon from "./Images/email.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { HashLink as Link } from "react-router-hash-link";
import Routing from "./components/Routing.js";
import smoothscroll from "smoothscroll-polyfill";
import ReactGA from "react-ga";

smoothscroll.polyfill();

class App extends Component {
  componentDidMount = () => {
    const trackingId = "UA-197692027-1";
    ReactGA.initialize(trackingId);
    ReactGA.event({
      category: "Page load",
      action: "User loaded main page"
    });
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar nav-expand-lg custom-navbar">
          <div className="navbar-brand custom-navbar-brand">
            <Link
              to="/#about-me"
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Brendan Marks
            </Link>
          </div>
          <Nav className="ml-auto sections">
            <Nav.Item className="nav-item">
              <Link
                className="menu-item"
                to="/#about-me"
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                ABOUT ME
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                className="menu-item"
                to="/#skills"
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                SKILLS
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="menu-item"
                to="/#work"
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                WORK
              </Link>
            </Nav.Item>
            <div className="contact">
              <a target="_blank" rel="noopener noreferrer" href={resume}>
                <img alt="resume icon" src={resumeIcon} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/brendanmarks"
              >
                <img alt="GitHub logo" src={githubIcon} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/brendan-marks/"
              >
                <img alt="LinkedIn logo" src={linkedinIcon} />
              </a>
              <a href="mailto:brendanmarkseng@gmail.com" target="_top">
                <img alt="email icon" src={emailIcon} />
              </a>
            </div>
          </Nav>
        </nav>
        <Routing />
      </div>
    );
  }
}

export default App;
