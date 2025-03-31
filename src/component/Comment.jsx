import React, { useState } from "react";
import ReplyForm from "./ReplyForm";
import { formatTimestamp } from "../utils/dateUtils";

/**
 * Component to render a single comment and its replies
 */
const Comment = ({ comment, onAddReply, depth = 0 }) => {
  const [isReplying, setIsReplying] = useState(false);

  const handleAddReply = (content) => {
    onAddReply(comment.id, content);
    setIsReplying(false);
  };

  return (
    <div className="comments" style={{ marginLeft: `${depth * 24}px` }}>
      <div className="comment-box">
        <div className="comment-box__user">
          <span className="comment-box__user-text">{comment.author}</span>
          <span className="comment-box__user-timestamp-text">
            {formatTimestamp(comment.timestamp)}
          </span>
        </div>
        <p className="comment-box__content">{comment.content}</p>
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="comment-box__reply"
        >
          {isReplying ? "Cancel" : "Reply"}
        </button>
      </div>

      {isReplying && (
        <ReplyForm
          onSubmit={handleAddReply}
          onCancel={() => setIsReplying(false)}
        />
      )}

      {comment.replies.length > 0 && (
        <div className="mt-2">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onAddReply={onAddReply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
