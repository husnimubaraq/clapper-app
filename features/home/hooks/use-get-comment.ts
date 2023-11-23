import { useQuery } from "react-query"
import { TResponse } from "types"
import { TComment, commentRequest } from "features/home"

export const useGetComment = (id: string) => {
    return useQuery<TResponse<TComment[]>>({
        queryKey: ['comment', id],
        queryFn: () => commentRequest(id),
    })
}