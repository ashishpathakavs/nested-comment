const initialComments = [
  {
    id: "1",
    author: "User1",
    content: "This is the first parent comment",
    timestamp: "2025-03-30T10:00:00Z",
    replies: [
      {
        id: "2",
        author: "User2",
        content: "This is a reply to the first comment",
        timestamp: "2025-03-30T10:05:00Z",
        replies: [
          {
            id: "3",
            author: "User3",
            content: "This is a nested reply",
            timestamp: "2025-03-30T10:10:00Z",
            replies: [],
          },
        ],
      },
      {
        id: "4",
        author: "User4",
        content: "Another reply to the first comment",
        timestamp: "2025-03-30T10:15:00Z",
        replies: [],
      },
    ],
  },
  {
    id: "5",
    author: "User5",
    content: "This is the second parent comment",
    timestamp: "2025-03-30T10:20:00Z",
    replies: [],
  },
];

export { initialComments };
