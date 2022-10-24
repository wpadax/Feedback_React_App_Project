import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
/*function App() {
  const title = "cim";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];
  const loading = false;
  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.id} {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{title.toLowerCase()}</p>
      {showComments && commentBlock}
    </div>
  );
}
export default App;
*/

function App() {
  return (
    <FeedbackProvider>
      <>
        <Header />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </>
    </FeedbackProvider>
  );
}
export default App;
