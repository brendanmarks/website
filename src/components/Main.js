import React, { Component } from "react";
import "../CSS/App.css";
import "../CSS/Main.css";
import { HashLink as Link } from "react-router-hash-link";
import me from "../Images/me.png";
import ScrollAnimation from "react-animate-on-scroll";
import Accomplishment from "./Accomplishment";
import resume from "../Images/BrendanMarksResume2021.pdf";
import githubBlack from "../Images/github-black.png";
import linkedinBlue from "../Images/linkedin-blue.png";
import ReactGA from "react-ga";
import rbc from "../Images/rbc.png";
import matrox from "../Images/matrox.jpg";
import ormuco from "../Images/ormuco.png";


class App extends Component {
  render() {
    return (
      <div className="Main">
        <a id="about-me" className="anchor" />
        <div className="about-me-section">
          <div className="about-me section off-white">
            <h2 className="sectionTitle">
              <span>Get to know me</span>
            </h2>
            <img src={me} className="round-headshot" alt="Brendan Marks"></img>
            <p>
              Studying <span>Software Engineering</span> at the{" "}
              <span>University of McGill</span>
              <br />
              From: <span>Montreal</span>, Canada
              <br />
              Interested in: <span>Software Engineering</span>
              <br />
              Open to full-time opportunities starting in <span>May 2022</span>
            </p>
            <ScrollAnimation animateIn="fadeInButton" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                href={resume}
                onClick={() =>
                  ReactGA.event({
                    category: "Button Click",
                    action: "User clicked on View Resume",
                  })
                }
              >
                View Resume
              </a>
            </ScrollAnimation>
          </div>
        </div>
        <a id="skills" className="anchor" />
        <div>
          <div className="section">
            <h2 className="sectionTitle">
              <span>This is what I know</span>
            </h2>
            <div className="sectionContsent">
              <p>
                <span className="section-subtitle">
                  <nobr>I am fluent in: </nobr>
                </span>
                <span className="element"> Python </span>
                <span className="element"> JavaScript </span>
                <span className="element"> HTML </span>
                <span className="element"> CSS </span>
                <span className="element"> Java </span>
                <span className="element"> C </span>
                <span className="element"> TypeScript </span>
                <span className="element"> SQL </span>
              </p>
              <p>
                <span className="section-subtitle">
                  <nobr>I have worked with: </nobr>
                </span>
                <span> Flask </span>
                <span className="element"> React </span>
                <span className="element"> Angular </span>
                <span className="element"> Flask </span>
                <span className="element"> FastAPI </span>
                <span className="element"> SpringBoot </span>
                <span className="element"> Pandas </span>
                <span className="element"> Scikit-Learn </span>
                <span className="element"> XCode </span>
                <span className="element"> Jupyter </span>
                <span className="element"> Git </span>
              </p>
            </div>
          </div>
        </div>
        <a id="work" className="anchor" />
        <div>
          <div className="section accomplishments merged-top off-white">
            <h2 className="sectionTitle">
              <span>Work Experience</span>
            </h2>
            <Accomplishment
              link="https://www.rbc.com/"
              image={rbc}
              alt="RBC logo"
              title="RBC"
              subtitle1="Quantitative Developer Co-Op"
              subtitle2="Toronto, ON"
              description="Worked as a member of the quantitative development team developing solutions for investment professionals and making improvements to existing softwares."
            />
            <Accomplishment
              link="https://www.matrox.com/"
              image={matrox}
              alt="Matrox logo"
              title="Matrox"
              subtitle1="Software Developer Intern"
              subtitle2="Dorval, QC"
              description="Worked on the MIL Imaging Library, including writing testing algorithms and analyzing various shape detection algorithms for documentation purposes."
            />
            <Accomplishment
              link="https://www.ormuco.com/"
              image={ormuco}
              alt="Ormuco logo"
              title="Ormuco"
              subtitle1="Software Developer Intern"
              subtitle2="Montreal, QC"
              description="Worked as a fullstack developer on the IaaS project, notably handling the integration of OpenStack Freezer into the existing platform."
            />
          </div>
        </div>
        <div className="section">
          <h2 className="sectionTitle">
            <span>Let's connect</span>
          </h2>
          <div className="connections">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/brendan-marks/"
              >
                <img alt="LinkedIn logo" src={linkedinBlue} />
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/brendanmarks"
              >
                <img alt="GitHub logo" src={githubBlack} />
              </a>
            </ScrollAnimation>
          </div>
          <p>
            Or, email me at{" "}
            <a
              className="email"
              href="mailto:brendanmarkseng@gmail.com"
              target="_top"
            >
              brendanmarkseng@gmail.com
            </a>
          </p>
          <Link
            to="/#about-me"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Back to top
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
