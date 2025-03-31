import React, { useState } from "react";

/**
 * Form to add a reply to an existing comment
 */
const ReplyForm = ({ onSubmit, onCancel }) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim() === "") return;

    onSubmit(content);
    setContent("");
  };

  return (
    <div className="reply">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="reply-textarea"
        placeholder="Write a reply..."
        rows="4"
      />
      <div className="reply-btn">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
        >
          Submit
        </button>
        <button onClick={onCancel} className="bg-gray-300 px-4 py-1 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ReplyForm;
