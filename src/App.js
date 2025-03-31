import "./styles.css";
import { initialComments } from "./data";
import CommentsSection from "../src/component/CommentsSection";

export default function App() {
  return (
    <div className="App">
      <h1>Nested Comment</h1>
      <CommentsSection initialComments={initialComments} />
    </div>
  );
}
