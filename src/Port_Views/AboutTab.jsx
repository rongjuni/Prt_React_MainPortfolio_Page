import React from "react";
import { Button } from "react-bootstrap";
import "./AboutTab.css";
import brainImg from "./brain_pic.png";
import github from "./pictures/github.png";
import linkedin from "./pictures/linkedin.png";
import myPicture from "./pictures/myPicture.png";

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
          href="#IQtestResult"
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
        {/* <span>
          <a href="https://github.com/rongjuni" target="blank">
            <img width="40rem" src={github} alt="github_icon" />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/in/mattseodev" target="blank">
            <img width="40rem" src={linkedin} alt="linkedin_icon" />
          </a>
        </span> */}
      </div>

      <div className="aboutMe introTitle bot-mar" id="introTitle">
        <img src={myPicture} className="my-face-picture" alt="myFace" />
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

      <div className="IQtestResult bot-mar" id="IQtestResult">
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
          I know what you are curious about.. Yes. I majored in accounting at
          George Mason University because I liked math and I thought that
          accounting is math related field. But it was not... Still I persued
          and advanced my career with CPA and MBA since it was helpful to
          acquaintance and still okay field (even though it is little bit
          boring) to work.
        </p>
        <p>
          However, I took couple Javascript courses to study because the company
          wanted to convert the website from Word Press. As I study more, I got
          more interested in and decided to dive deeper. Now I am in love with
          coding and really enjoying
        </p>
      </div>

      <div className="aboutMe education bot-mar" id="education">
        <h3>Education</h3>
        <div className="achDiv">
          <h5>Coding Apple</h5>
          <p>Front-End Development</p>
        </div>

        <div className="achDiv">
          <h5>TrueCoders</h5>
          <p>Web Development</p>
        </div>

        <div className="achDiv">
          <h5>University of Illinois Urbana-Champaign</h5>
          <p>Master of Business Administration</p>
        </div>

        <div className="achDiv">
          <h5>George Mason University</h5>
          <p>B.S in Accounting</p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="aboutMe workExperience bot-mar" id="workExperience">
        <h3 className="compName">Nuel Express</h3>
        <p>
          <h6>Web Developer</h6>
          <li>
            Published two websites building from scratch for the company with
            WordPress to introduce the company to potential clients
          </li>
          <li>
            Implemented multiple plug-ins including shipping tracker and forms
            to collect users data
          </li>
          <li>
            Improved the websites based on internal / external users feedback
          </li>
          <li>
            Performed periodic manual testing to make sure everything works
          </li>
          <li>
            Maintained website and solved issues when the website is not
            functioning as designed
          </li>
          <li>
            Contacted web hosting service provider to request technical support
            to solve issues
          </li>
          <li>
            Worked on converting and refactoring the Website from Word Press to
            React single page application for better experience of clients
          </li>
          <li>
            Implemented third-party shipping API to track users live package
          </li>
          <li>Implemented RESTful API</li>
        </p>
      </div>
    </div> //ending div
  );
};

export default AboutTab;
