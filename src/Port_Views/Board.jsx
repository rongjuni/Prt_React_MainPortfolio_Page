import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./Board.css";

const Board = () => {
  let [title, setTitle] = useState([
    "Hey, Looks So Great. I'm Mark",
    "My name is Steve Zobs",
  ]);
  let [content, setContent] = useState([
    "Hey Matthew. This looks so great. I want to hire you for $2M annual salary. Please let me know if you are interested.",
    "I have always wanted to find a person like you Matthew. Please give me a call. Let's discuss more about your role. Thanks",
    "",
  ]);
  let [inputTitle, setInputTitle] = useState("");
  let [inputContent, setInputContent] = useState("");
  let [clicked, setClicked] = useState();
  let [pikaboo, setPikaboo] = useState(false);

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
    <div>
      <hr />
      <h3 className="center" style={{ margin: "20px" }}>
        Please let me know that you visited ! 😊 <br />
        Any suggestion to improve this blog would be appreciated
      </h3>
      <hr />

      {title.map((val, ind) => {
        return (
          <div
            className="pointer"
            onClick={() => {
              setClicked(ind);
            }}
          >
            <h5>
              {val}

              {/* Need work to prevent multiple click and backend linking */}
              {/* <span
                className="like-button"
                onClick={() => {
                  let copyLikeNum = [...like];
                  copyLikeNum[ind]++;
                  setLike(copyLikeNum);
                }}
              >
                {"  "}
                👍
              </span> */}

              {/* <span>{like[ind]} liked</span> */}
            </h5>
            <hr />
          </div>
        );
      })}

      <div>
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
        <hr />{" "}
        <Button
          variant="outline-success"
          className="center"
          onClick={() => {
            setPikaboo(!pikaboo);
          }}
        >
          Detail / Hide
        </Button>
        <br />
        <br />
      </div>

      {pikaboo === false ? (
        <Modal title={title} content={content} clicked={clicked}></Modal>
      ) : null}
    </div> // div ending line
  ); // return ending line
}; // board ending line

function Modal(props) {
  return (
    <div className="center">
      <h2> {props.title[props.clicked]} </h2>
      <p> {props.content[props.clicked]} </p>
    </div>
  );
}
export default Board;
