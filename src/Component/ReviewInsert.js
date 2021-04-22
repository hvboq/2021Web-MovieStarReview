import React, { useState } from "react";

const ReviewInsert = (props) => {
  const { reviewRef, setter, value } = props;
  const [inputWriter, setWriter] = useState("");
  const [inputTitle, setTitle] = useState("");
  const [inputContents, setContents] = useState("");
  const [inputStar, setStar] = useState("");

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
      const temp = inputContents;
    setContents(e.target.value);
    if(inputContents.trim().length > 50){
        setContents(temp);
    }
  };
  const changeStar = (e) => {
    setStar(e.target.value);
  };
  const insertReviewList = () => {
    if (inputTitle.trim().length <= 0) {
      return;
    }
    console.log(inputStar)
    setter([
      ...value,
      {
        idx: reviewRef.current++,
        writer: inputWriter,
        title: inputTitle,
        contents: inputContents,
        star: inputStar,
      },
    ]);
  };
  return (
    <div>
      <h2>리뷰 만들기</h2>
      <input
        name="Writer"
        onChange={onChangeWriter}
        value={inputWriter}
        placeholder="글쓴이"
      />
      <input
        name="Title"
        onChange={onChangeTitle}
        value={inputTitle}
        placeholder="영화제목"
      />
      <input
        name="Contents"
        onChange={onChangeContents}
        value={inputContents}
        placeholder="영화평"
      />
      <p>별점</p>
      &nbsp;

      <input
        type="radio"
        id="Star"
        name="Star"
        value="★☆☆☆☆"
        checked={inputStar === "★☆☆☆☆" ? true : false}
        onChange={changeStar}
      />
      ★☆☆☆☆
      &nbsp;

      <input
        type="radio"
        id="Star"
        name="Star"
        value="★★☆☆☆"
        checked={inputStar === "★★☆☆☆" ? true : false}
        onChange={changeStar}
      />
      ★★☆☆☆
      &nbsp;

      <input
        type="radio"
        id="Star"
        name="Star"
        value="★★★☆☆"
        checked={inputStar === "★★★☆☆" ? true : false}
        onChange={changeStar}
      />
      ★★★☆☆
      &nbsp;

      <input
        type="radio"
        id="Star"
        name="Star"
        value="★★★★☆"
        checked={inputStar === "★★★★☆" ? true : false}
        onChange={changeStar}
      />
      ★★★★☆
      &nbsp;

      <input
        type="radio"
        id="Star"
        name="Star"
        value="★★★★★"
        checked={inputStar === "★★★★★" ? true : false}
        onChange={changeStar}
      />
      ★★★★★
      &nbsp;
      <button type="submit" onClick={insertReviewList}>
        확인
      </button>
      <button>취소</button>
    </div>
  );
};

export default ReviewInsert;
