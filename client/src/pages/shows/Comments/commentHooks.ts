import { useMutation, useQuery } from "@tanstack/react-query";
import { commentsService } from "./commentsApiService";
import { Comment } from "../../../models/Comment";
import { GetQueryClient } from "../../../queryClient";

const queryClient = GetQueryClient();

export const CommentKeys = {
  commentsKey: ["commentsKey"] as const
}

export const useGetCommentsQuery = () => {
  return useQuery({
    queryKey: CommentKeys.commentsKey,
    queryFn: async () => await commentsService.getComments()
  })
}

export const useUpdateCommentsMutation = () => {
  return useMutation(async (updatedComments: Comment[]) => {
    return await commentsService.updateComments(updatedComments)
  },
  {
    onSuccess: () => 
      queryClient.invalidateQueries(CommentKeys.commentsKey)
  })
}