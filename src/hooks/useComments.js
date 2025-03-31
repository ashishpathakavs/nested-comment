import { useState } from "react";

/**
 * Custom hook to manage comments state and operations
 * @param {Array} initialComments - Initial array of comments
 * @returns {Object} Comments state and operations
 */
const useComments = (initialComments = []) => {
  const [comments, setComments] = useState(initialComments);

  /**
   * Add a new top-level comment
   * @param {string} content - Comment content
   * @param {string} author - Comment author (defaults to "CurrentUser")
   */
  const addComment = (content, author = "CurrentUser") => {
    if (content.trim() === "") return;

    const newComment = {
      id: Date.now().toString(),
      author,
      content,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    setComments([...comments, newComment]);
    return newComment;
  };

  /**
   * Add a reply to a specific comment
   * @param {string} parentId - ID of the parent comment
   * @param {string} content - Reply content
   * @param {string} author - Reply author (defaults to "CurrentUser")
   */
  const addReply = (parentId, content, author = "CurrentUser") => {
    if (content.trim() === "") return;

    const reply = {
      id: Date.now().toString(),
      author,
      content,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    // Create updated comments by adding reply to the right parent
    const updateComments = (commentsList) => {
      return commentsList.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply],
          };
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateComments(comment.replies),
          };
        }
        return comment;
      });
    };

    setComments(updateComments(comments));
    return reply;
  };

  return {
    comments,
    setComments,
    addComment,
    addReply,
  };
};

export default useComments;
