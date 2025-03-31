import React from "react";
import Comment from "./Comment";

/**
 * Component to render a list of comments
 */
const CommentList = ({ comments, onAddReply }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onAddReply={onAddReply} />
      ))}

      {comments.length === 0 && (
        <p>No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentList;
