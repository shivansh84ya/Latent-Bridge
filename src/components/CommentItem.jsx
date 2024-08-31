import React from "react";

function CommentItem({ comment }) {
  return (
    <li>
      <strong>{comment.email}</strong>: {comment.body}
      
    </li>
  );
}

export default CommentItem;
