import { FC, FormEvent } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { CommentList } from "./CommentList"
import { Comment } from "../../../models/Comment";
import { TextInput, useTextInput } from "../../../components/forms/TextInput";
import { useAddCommentsMutation, useGetAllComments, useGetCommentsForShowQuery, useUpdateCommentsMutation } from "./commentHooks";

export const Comments: FC<{
  showId: number
}> = ({ showId }) => {
  const commentsQuery = useGetAllComments();
  const comments = commentsQuery.data
  const showCommentsQuery = useGetCommentsForShowQuery(showId);
  const updateCommentsMutation = useUpdateCommentsMutation(showId);
  const addCommentMutation = useAddCommentsMutation();
  const showComments = showCommentsQuery.data
  const newCommentControl = useTextInput("")

  if (showCommentsQuery.isFetching || commentsQuery.isLoading) return <Spinner />
  if (showCommentsQuery.isError || commentsQuery.isError) return <h3>Error getting comments</h3>
  if (!showComments || !comments) return <h3>Unable to get comments</h3>

  const addComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newCommentControl.value !== "") {
      const newComment: Comment = {
        id: Math.random(),
        text: newCommentControl.value,
        showId,
      };
      addCommentMutation.mutateAsync([...comments, newComment]).then(() => {
        newCommentControl.setValue("")
      })
    }
  };

  const deleteComment = (id: number) => {
    const remainingComments = comments.filter(c => c.id !== id)
    updateCommentsMutation.mutate(remainingComments)
  }

  const updateComment = (newText: string, id: number) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, text: newText };
      }
      return comment;
    });
    updateCommentsMutation.mutate(updatedComments)
  }

  return (
    <div className="row">
      <div className="col">
        <div className="fs-4">Comments:</div>
        <CommentList comments={showComments}
          deleteHandler={(id) => deleteComment(id)}
          updateHandler={updateComment} />
      </div>
      <div className="col-auto">
        <form onSubmit={addComment}>
          <TextInput control={newCommentControl}
            label="New Comment"
            labelClassName="col-12" />
          <div className="text-end">
            <button className="btn btn-success my-2"
              disabled={showCommentsQuery.isFetching}
              type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
