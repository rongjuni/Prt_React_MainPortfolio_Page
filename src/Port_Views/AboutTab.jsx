import React from "react";
import { Button } from "react-bootstrap";
import "./AboutTab.css";

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

      <div className="aboutMe introTitle" id="introTitle">
        <h1>Matthew Seo CPA MBA</h1>
        <h3>Software Developer</h3>
      </div>
      <div className="icons">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      </div>
      <div className="aboutMe intro" id="introStory">
        <h3>MY STORY</h3>
        <p>
          I know what you are going to say.. And yes. I had to chagne because I
          like it much more. I chose accounting as a student who liked math and
          physics because I was informed that accounting is all math related
          field with high job security 😁.
        </p>
        <p>
          However, I happend to experience some of SQL at work to pull out
          financial data and manipulate to the proper format that we needed. It
          was interesting. I started researching and started learning coding and
          immediately realized that it is what I was looking for.
        </p>
        <p>
          I enjoy time focusing on things and thinking deeply. I also enjoy
          brain teasing games like riddles or room-escaping in my freetime, and
          I like developing because it's free brain teasing game that I don't
          have to pay to App store or room escape.
        </p>
      </div>

      <div className="aboutMe education" id="education">
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

      <div className="aboutMe workExperience" id="workExperience">
        <h3 className="compName">SOSI</h3>
        <p>
          Government Contracting Company <br />
          Sr. Accountant <br /> Utilze MySQL to extract and combine financial
          data to analyze and provide to management in proper format
        </p>

        <h3 className="compName">Lincoln Property Company</h3>
        <p>
          Property Management Company
          <br />
          Project Accountant
          <br />
          Prepared/provided monthly financial statements and executive summary
          to multiple clients in my portfolio on time
        </p>

        <h3 className="compName">Pragmatics Inc</h3>
        <p>
          Government Contracting Company
          <br />
          Accountant
          <br />
          Performed Reconciliation / Billing / Journal Entries / Review
        </p>

        <h3 className="compName">MSCPA</h3>
        <p>
          Public Accounting Firm
          <br />
          Tax Accountnat
          <br />
          Lead team of 4 to provide best quality of tax consulting and tax
          returns preparation services to clients.
        </p>
      </div>
    </div> //ending div
  );
};

export default AboutTab;
