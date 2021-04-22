import React from "react";

const ReviewList = (props) => {
  const { setter, value } = props;
  const removeItem = (idx) => {
    setter(value.filter((item) => item.idx !== idx));
  };
  return (
    <div>
      글번호 작성자 영화제목 영화평 별점
      {props.value.map((item) => {
        const { idx, writer, title, contents, star } = item;

        return (
          <div key={idx}>
            {item.idx}
            &nbsp;
            {item.writer}
            &nbsp;
            {item.title}
            &nbsp;
            {item.contents}
            &nbsp;
            {item.star}
            &nbsp;
            <button
              type="submit"
              value={item.idx}
              onClick={() => removeItem(idx)}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
