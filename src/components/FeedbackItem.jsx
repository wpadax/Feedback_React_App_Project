import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ itemo }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{itemo.rating}</div>
      <button onClick={() => deleteFeedback(itemo.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(itemo)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{itemo.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  itemo: PropTypes.object.isRequired,
};

export default FeedbackItem;
