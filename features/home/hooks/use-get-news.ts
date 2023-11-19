import { useQuery } from "react-query"
import { TResponse } from "types"
import { TNews, newsRequest } from "features/home"

export const useGetNews = () => {
    return useQuery<TResponse<TNews[]>>({
        queryKey: ['news'],
        queryFn: () => newsRequest(),
    })
}