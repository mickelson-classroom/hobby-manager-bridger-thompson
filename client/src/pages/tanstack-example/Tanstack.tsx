import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { commentsService } from '../shows/Comments/commentsApiService'
import { Comment } from '../../models/Comment'

const queryClient = new QueryClient()

export const Tanstack = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QuickStartComments />
    </QueryClientProvider>
  )
}

function QuickStartComments() {
  const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ['quickStartComments'], queryFn: async () => await commentsService.getComments() })

  const mutation = useMutation({
    mutationFn: async (c: Comment[]) => await commentsService.updateComments(c),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quickStartComments'] })
    },
  })

  if (!query.data) return <h3>Unable to get comments</h3>

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate([
            ...query.data,
            {
              id: Math.random(),
              text: 'Hello World',
              showId: 1
            }
          ])
        }}
      >
        Add Comment
      </button>
    </div>
  )
}