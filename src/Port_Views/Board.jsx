import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./Board.css";

const Board = () => {
  let [title, setTitle] = useState([
    "Hey Matt. This is Mark Juckerperg",
    "Message from Steve Zobs.",
  ]);
  let [content, setContent] = useState([
    "I've tried to reach you multiple times. Please call me back. I need your help on current project Facebool. Thanks",
    "I have always wanted to find a person like you Matt. Please give me a call. Let's discuss more about your role. Thanks",
  ]);
  let [inputTitle, setInputTitle] = useState("");
  let [inputContent, setInputContent] = useState("");
  let [clicked, setClicked] = useState();
  let [pikaboo, setPikaboo] = useState(false);

  // New Posting //
  const inputPosting = () => {
    if (inputTitle.length >= 1 && inputContent.length >= 1) {
      let copyTitle = [...title];
      copyTitle.unshift(inputTitle);
      setTitle(copyTitle);

      let copyContent = [...content];
      copyContent.unshift(inputContent);
      setContent(copyContent);

      setInputTitle("");
      setInputContent("");
    }
  };

  return (
    <div className="boardContainer">
      <div className="boardWidth">
        <hr />
        <h3 className="center" style={{ margin: "20px" }}>
          Please let me know that you visited ! 😊 <br />
          Any suggestion to improve this blog would be appreciated
        </h3>
        <hr />
      </div>

      <div className="boardWidth">
        <hr />
        {title.map((val, ind) => {
          return (
            <div
              className="pointer"
              onClick={() => {
                setClicked(ind);
                setPikaboo(!pikaboo);
              }}
            >
              <h5>{val}</h5>

              {ind === clicked && pikaboo === true ? (
                <Modal
                  title={title}
                  content={content}
                  clicked={clicked}
                ></Modal>
              ) : null}
              <hr />
            </div>
          );
        })}
      </div>

      {/* input field starts here */}
      <div className="boardWidth">
        <InputGroup className="mb-3">
          <InputGroup.Text>Title</InputGroup.Text>
          <FormControl
            required
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
            value={inputTitle}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Contents</InputGroup.Text>
          <FormControl
            required
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                inputPosting();
              }
            }}
            value={inputContent}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
      </div>

      <div className="center">
        <Button
          variant="outline-primary"
          className="center"
          onClick={inputPosting}
        >
          Submit
        </Button>
      </div>
      <br />
      <br />
    </div> // div ending line
  ); // return ending line
}; // board ending line

function Modal(props) {
  return (
    <div>
      <br />
      {/* <h4> {props.title[props.clicked]} </h4> */}
      <p style={{ paddingLeft: "15px" }}> {props.content[props.clicked]} </p>
    </div>
  );
}
export default Board;
