import { useState, useEffect, FC, FormEvent } from "react";
import { Spinner } from "../../components/spinner/Spinner";
import { CommentList } from "./CommentList"
import { Comment } from "../../models/Comment";
import { commentsService } from "./commentsApiService";
import { TextInput, useTextInput } from "../../components/forms/TextInput";

export const Comments: FC<{
  showId: number
}> = ({ showId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = () => {
    setIsLoading(true);
    commentsService.getComments().then((v) => {
      setComments(v);
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false)
      console.log("Error getting comments", error)
    });
  };

  const addComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textControl.value !== "") {
      const newComment: Comment = {
        id: Math.random(),
        text: textControl.value,
        showId,
      };

      commentsService.updateComments([...comments, newComment]).then(() => {
        loadComments();
        textControl.setValue("")
      }).catch((error) => {
        console.error("Error adding comment:", error);
      });
    }
  };

  const deleteComment = (id: number) => {
    const remainingComments = comments.filter(c => c.id !== id)
    commentsService.updateComments(remainingComments).then(() => {
      loadComments();
    }).catch(error => {
      console.log("Error deleting comment:", error)
    })
  }

  const updateComment = (newText: string, id: number) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, text: newText };
      }
      return comment;
    });
    commentsService.updateComments(updatedComments).then(() => {
      loadComments();
    }).catch(error => {
      console.log("Error updating comment:", error)
    })
  }

  const textControl = useTextInput("")
  if (isLoading) return <div className="text-center"><Spinner /></div>
  return (
    <div className="row">
      <div className="col">
        <div className="fs-4">Comments:</div>
        <CommentList comments={comments.filter(c => c.showId === showId)}
          deleteHandler={(id) => deleteComment(id)}
          updateHandler={updateComment} />
      </div>
      <div className="col-auto">
        <form onSubmit={addComment}>
          <TextInput control={textControl}
            label="New Comment"
            labelClassName="col-12" />
          <div className="text-end">
            <button className="btn btn-success my-2"
              type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
