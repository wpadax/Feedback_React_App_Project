import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback!</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((itemo) => (
        <FeedbackItem key={itemo.id} itemo={itemo} />
      ))}
    </div>
  );

  ///////////// Nemtudom megcsinálni az animációt :( //////////
  //return (
  //  <div className="feedback-list">
  //    {feedbacko.map((itemo) => (
  //      <FeedbackItem
  //        key={itemo.id}
  //        itemo={itemo}
  //        handleDelete={handleDeleteo}
  //      />
  //    ))}
  //  </div>
  //);
}
export default FeedbackList;
