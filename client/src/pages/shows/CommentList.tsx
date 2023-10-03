import { FC } from "react";
import { Comment } from "../../models/Comment";

export const CommentList: FC<{
  comments: Comment[],
  deleteHandler: (id: number) => void,
}> = ({ comments, deleteHandler }) => {

  if (comments.length === 0) return (
    <div>No comments</div>
  )

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <div className="row">
            <div className="col">
              {comment.text}
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-danger"
                onClick={() => deleteHandler(comment.id)}>X</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};