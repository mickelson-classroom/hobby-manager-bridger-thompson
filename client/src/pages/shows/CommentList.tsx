import { FC } from "react";
import { Comment } from "../../models/Comment";
import { CommentItem } from "./CommentItem";

export const CommentList: FC<{
  comments: Comment[];
  deleteHandler: (id: number) => void;
  updateHandler: (newCommentText: string, id: number) => void;
}> = ({ comments, deleteHandler, updateHandler }) => {
  if (comments.length === 0) return <div>No comments</div>;

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} className="my-1">
          <CommentItem
            comment={comment}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
          />
        </li>
      ))}
    </ul>
  );
};
