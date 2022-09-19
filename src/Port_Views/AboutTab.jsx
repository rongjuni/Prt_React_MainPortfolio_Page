import React from "react";
import "./AboutTab.css";
import github from "./pictures/github.png";
import linkedin from "./pictures/linkedin.png";
import Profile from "./Components/Profile";
import IQresult from "./Components/IQtest";
import MyStory from "./Components/myStory";
import Education from "./Components/Education";
import WorkExp from "./Components/WorkExp";
import Navigation from "./Components/Navigation";

const AboutTab = () => {
  return (
    <div className="container">
      <Navigation></Navigation>

      <div className="socialIcons bot-mar" id="introTitle"></div>

      <Profile></Profile>
      <IQresult></IQresult>
      <MyStory></MyStory>
      <Education></Education>

      {/* <WorkExp></WorkExp> */}
    </div> //ending div
  );
};

export default AboutTab;
