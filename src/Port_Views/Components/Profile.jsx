import myPicture from "../pictures/myPicture.png";

const Profile = () => {
  return (
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
  );
};

export default Profile;
