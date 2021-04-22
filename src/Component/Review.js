import React, { useState, useRef } from "react";
import ReviewInsert from "./ReviewInsert";
import ReviewList from "./ReviewList";

const Review = () => {
  const reviewRef = useRef(0);
  const [reviewList, setReviewlist] = useState([]);

  return (
    <div>
      <h1>영화 별점 사이트</h1>
      <ReviewInsert value={reviewList} reviewRef={reviewRef} setter={setReviewlist} />
      <ReviewList value={reviewList} setter={setReviewlist} />
    </div>
  );
};

export default Review;