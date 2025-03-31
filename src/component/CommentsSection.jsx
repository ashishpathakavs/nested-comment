import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import useComments from "../hooks/useComments";

/**
 * Main component that combines the comment form and comment list
 */
const CommentsSection = ({ initialComments = [] }) => {
  const { comments, addComment, addReply } = useComments(initialComments);

  return (
    <div className="comment-section">
      {/* Add new comment section */}
      <CommentForm onSubmit={addComment} />

      {/* Comments list */}
      <CommentList comments={comments} onAddReply={addReply} />
    </div>
  );
};

export default CommentsSection;
