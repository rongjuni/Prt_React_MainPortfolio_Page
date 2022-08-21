import brainImg from "../pictures/brain_pic.png";

const IQresult = () => {
  return (
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
  );
};

export default IQresult;
