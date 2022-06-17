import React from "react";
import { Button } from "react-bootstrap";
import "./AboutTab.css";
import brainImg from "./brain_pic.png";
import github from "./pictures/github.png";
import linkedin from "./pictures/linkedin.png";

const AboutTab = () => {
  return (
    <div className="container">
      <div className="aboutMe aboutMeButton">
        <Button
          href="#introTitle"
          variant="outline-secondary"
          className="buttonFont"
        >
          Me
        </Button>{" "}
        <Button
          href="#introTitle"
          variant="outline-secondary"
          className="buttonFont"
        >
          IQ
        </Button>{" "}
        <Button
          href="#introStory"
          variant="outline-secondary"
          className="buttonFont"
        >
          My Story
        </Button>{" "}
        <Button
          href="#education"
          variant="outline-secondary"
          className="buttonFont"
        >
          Achievement
        </Button>{" "}
        <Button
          href="#workExperience"
          variant="outline-secondary"
          className="buttonFont"
        >
          Experience
        </Button>{" "}
      </div>

      <div className="socialIcons bot-mar" id="introTitle">
        <span>
          <a href="https://github.com/rongjuni" target="blank">
            <img width="40rem" src={github} alt="github_icon" />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/matthew-seo-cpa-mba-71349bb9/"
            target="blank"
          >
            <img width="40rem" src={linkedin} alt="linkedin_icon" />
          </a>
        </span>
      </div>

      <div className="aboutMe introTitle bot-mar" id="introTitle">
        <h1>Matthew Seo CPA MBA</h1>
        <h3>Software Developer</h3>

        <div className="icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="devicon-react"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt="devicon-html"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="devicon-css"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            alt="devicon-javascript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            alt="devicon-mongoDB"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="devicon-nodeJS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt="devicon-express"
          />
        </div>
      </div>

      <div className="IQtestResult bot-mar">
        <h3>
          <a
            href="https://iq-society.com/Report?code=1652726053718GZDHNYG3VP4F5TA2"
            target="__blank"
          >
            IQ Test Result<br></br>
            <img src={brainImg} alt="brain img" />
          </a>
        </h3>
      </div>

      <div className="aboutMe intro bot-mar" id="introStory">
        <h3>MY STORY</h3>
        <p>
          I know what you are going to ask me if you have noticed the titles
          next to my name.... But yes. I want to be a developer dreadfully. I
          was a student who liked math and physics in middle and high school.
          When I had to pick a major at college, I was informed that
          "Accounting" would be the best choice for me since they are playing
          with numbers. I believed that until now as you see my license and
          additional degree.
        </p>
        <p>
          However, I happend to experience some of SQL at current company to
          extract financial data, and it was really interesting. I decided to
          learn more and started studying other programming languages such as
          Javascript, React and NodeJS. It was enjoyable process. I enjoy time
          to deeply think. I even pay to purchase brain-teasing games to rack my
          brain but in developing environment, I can get unlimited number of
          brain-teasing tasks for FREE 😁.
        </p>
        <p>
          As I am in a career transition process, I am eager to learn more and
          willing to spend extra hours to study and contribute to a team. I am a
          fast learner and catch things quickly. Even though I do not have all
          the answers at the moment, I will make it happen and come up with
          solutions.
        </p>
      </div>

      <div className="aboutMe education bot-mar" id="education">
        <h3>ACHIEVEMENTS</h3>
        <div className="achDiv">
          <h5>University of Illinois Urbana-Champaign</h5>
          <p>Master of Business Administration</p>
        </div>

        <div className="achDiv">
          <h5>George Mason University</h5>
          <p>B.S in Accounting</p>
        </div>

        <div className="achDiv">
          <h5>Coding Apple</h5>
          <p>FrontEnd Development</p>
        </div>

        <div className="achDiv">
          <h5>TrueCoders</h5>
          <p>Web Development</p>
        </div>

        <div className="achDiv">
          <h5>Licensed CPA in VA</h5>
        </div>
      </div>

      {/* Work Experience */}
      <div className="aboutMe workExperience bot-mar" id="workExperience">
        <h3 className="compName">SOSI</h3>
        <p>
          <h5>Government Contracting Company </h5>
          <h6>Sr. Accountant</h6>
          <li>
            Utilzed Microsoft SQL to extract and convert financial data to a
            meaningful information to assist the management for their decision
            making.
          </li>
        </p>

        <h3 className="compName">Lincoln Property Company</h3>
        <p>
          <h5>Property Management Company</h5>
          <h6>Project Accountant</h6>
          <li>
            Prepared/provided monthly financial statements and executive summary
            to clients on time.
          </li>
          <li>
            Worked in a team of 7 and deal with multiple clients in portfolio to
            satisfy their needs.
          </li>
        </p>

        <h3 className="compName">Pragmatics Inc</h3>
        <p>
          <h5>Government Contracting Company</h5>
          <h6>Accountant</h6>
          <li>Performed Reconciliation / Billing / Journal Entries / Review</li>
        </p>

        <h3 className="compName">MSCPA</h3>
        <p>
          <h5>Public Accounting Firm</h5>
          <h6>Tax Accountnat</h6>
          <li>
            Lead team of 4 to provide best quality of tax consulting and tax
            return preparation services to clients.
          </li>
        </p>
      </div>
    </div> //ending div
  );
};

export default AboutTab;
