import { useMutation, useQuery } from "@tanstack/react-query";
import { commentsService } from "./commentsApiService";
import { Comment } from "../../../models/Comment";
import { GetQueryClient } from "../../../queryClient";

const queryClient = GetQueryClient();

export const CommentKeys = {
  commentsKey: ["commentsKey"] as const,
  showCommentsKey: (showId: number) => ["commentsKey", showId] as const
}

export const useGetAllComments = () => useQuery({
  queryKey: CommentKeys.commentsKey,
  queryFn: async () => await commentsService.getComments()
})

export const useGetCommentsForShowQuery = (showId: number) => {
  return useQuery({
    queryKey: CommentKeys.showCommentsKey(showId),
    queryFn: async () => {
      const all = await commentsService.getComments()
      return all.filter(c => c.showId === showId);
    }
  })
}

export const useUpdateCommentsMutation = (showId: number) => {
  return useMutation(async (updatedComments: Comment[]) => {
    return await commentsService.updateComments(updatedComments)
  },
  {
    onSuccess: () => 
      queryClient.invalidateQueries(CommentKeys.showCommentsKey(showId))
  })
}

export const useAddCommentsMutation = () => {
  return useMutation(async (updatedComments: Comment[]) => {
    return await commentsService.updateComments(updatedComments)
  },
  {
    onSuccess: () => 
      queryClient.invalidateQueries(CommentKeys.commentsKey)
  })
}