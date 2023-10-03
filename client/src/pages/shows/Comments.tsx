import { FC } from "react";
import { Comment } from "../../models/Comment";

export const Comments: FC<{
  comments: Comment[]
}> = ({comments}) => {

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};