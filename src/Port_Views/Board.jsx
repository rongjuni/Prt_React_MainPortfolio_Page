import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
function Board() {
  let [title, setTitle] = useState(["sample1"]);
  let [content, setContent] = useState(["sample content 1"]);
  let [inputTitle, setInputTitle] = useState("");
  let [inputContent, setInputContent] = useState("");
  let [like, setLike] = useState([0]);
  let [clicked, setClicked] = useState();
  let [pikaboo, setPikaboo] = useState(false);

  function inputPosting() {
    let copyTitle = [...title];
    copyTitle.unshift(inputTitle);
    setTitle(copyTitle);

    let copyContent = [...content];
    copyContent.unshift(inputContent);
    setContent(copyContent);

    let copyLike = [...like];
    copyLike.unshift(0);
    setLike(copyLike);
  }

  return (
    <div>
      <h4>Leave your comments</h4>
      <hr />

      {title.map((val, ind) => {
        return (
          <div
            onClick={() => {
              setClicked(ind);
            }}
          >
            <h3>
              {val}
              <button
                className="button"
                onClick={() => {
                  let copyLikeNum = [...like];
                  copyLikeNum[ind]++;
                  setLike(copyLikeNum);
                }}
              >
                ❤️
              </button>
              <span> {like[ind]}</span>
            </h3>
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
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Contents</InputGroup.Text>
          <FormControl
            required
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
        {/* <input
          type="text"
          required
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        <br />
        <textarea
          type="text"
          width="500"
          required
          onChange={(e) => {
            setInputContent(e.target.value);
          }}
        /> */}
        <Button variant="outline-primary" onClick={inputPosting}>
          Submit
        </Button>
        {/* <button onClick={inputPosting}>Submit</button> */}
      </div>

      <Button
        variant="outline-primary"
        onClick={() => {
          setPikaboo(!pikaboo);
        }}
      >
        Detail
      </Button>
      {/* <button
        onClick={() => {
          setPikaboo(!pikaboo);
        }}
      >
        Detail
      </button> */}

      {pikaboo === true ? (
        <Modal title={title} content={content} clicked={clicked}></Modal>
      ) : null}
      {/* ending line.. */}
    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <h2> {props.title[props.clicked]} </h2>
      <p> {props.content[props.clicked]} </p>
    </div>
  );
}
export default Board;
