import { FC, useState } from "react";
import { Comment } from "../../../models/Comment";
import { TextInput, useTextInput } from "../../../components/forms/TextInput";

export const CommentItem: FC<{
  comment: Comment;
  deleteHandler: (id: number) => void;
  updateHandler: (newCommentText: string, id: number) => void;
}> = ({ comment, deleteHandler, updateHandler }) => {
  const [isEditing, setIsEditing] = useState(false);
  const commentControl = useTextInput("");

  const updateComment = (id: number) => {
    updateHandler(commentControl.value, id);
    setIsEditing(false);
  };

  const handleEditing = (text: string) => {
    commentControl.setValue(text);
    setIsEditing(true);
  };

  if (isEditing)
    return (
      <div className="row">
        <div className="col">
          <TextInput control={commentControl} />
        </div>
        <div className="col-auto my-auto">
          <button
            className="btn btn-outline-secondary px-2 py-1"
            onClick={() => setIsEditing(false)}
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>
        <div className="col-auto my-auto">
          <button
            className="btn btn-outline-success px-2 py-1"
            onClick={() => updateComment(comment.id)}
          >
            <i className="bi bi-check-lg" />
          </button>
        </div>
      </div>
    );

  return (
    <div className="row">
      <div className="col">{comment.text}</div>
      <div className="col-auto my-auto">
        <button
          className="btn btn-outline-secondary px-2 py-1"
          onClick={() => handleEditing(comment.text)}
        >
          <i className="bi bi-pencil" />
        </button>
      </div>
      <div className="col-auto my-auto">
        <button
          className="btn btn-outline-danger px-2 py-1"
          onClick={() => deleteHandler(comment.id)}
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>
    </div>
  );
};
