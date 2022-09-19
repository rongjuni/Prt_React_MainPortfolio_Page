import { Button } from "react-bootstrap";

const Navigation = () => {
  return (
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
      {/* <Button
        href="#workExperience"
        variant="outline-secondary"
        className="buttonFont"
      >
        Experience
      </Button>{" "} */}
    </div>
  );
};

export default Navigation;
