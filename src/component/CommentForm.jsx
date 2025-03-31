import React, { useState } from "react";

/**
 * Form to add a new top-level comment
 */
const CommentForm = ({ onSubmit }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === "") return;

    onSubmit(content);
    setContent("");
  };

  return (
    <div className="comment-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        rows="5"
        className="commnet-from__textarea"
      />
      <button onClick={handleSubmit}>Add Comment</button>
    </div>
  );
};

export default CommentForm;
