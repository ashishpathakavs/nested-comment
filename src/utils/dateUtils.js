/**
 * Format timestamp to a readable format
 * @param {string} timestamp - ISO timestamp
 * @returns {string} Formatted date string
 */
export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
