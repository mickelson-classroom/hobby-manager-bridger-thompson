import { QueryClient } from "@tanstack/react-query";
import toast, { ErrorIcon } from "react-hot-toast";

const toastError = async (error: any) => {
  console.log(error);
  const message = `Whoops... An error has occurred: ${error}`

  toast(
    (t: any) => (
      <div className="row">
        <div className="col-auto my-auto">
          <ErrorIcon />
        </div>
        <div className="col my-auto"> {message}</div>
        <div className="col-auto my-auto">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="btn btn-outline-secondary py-1"
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
    ),
    {
      duration: Infinity,
    }
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: toastError,
      retry: 0,
      staleTime: 30000,
      refetchInterval: 30000,
    },
    mutations: {
      onError: toastError,
      retry: 0,
    },
  },
})

export const GetQueryClient = () => {
  return queryClient;
} 