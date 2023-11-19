import { useQuery } from "react-query"
import { TResponse } from "types"
import { TCategory, categoryRequest } from "features/clapper"

export const useGetCategory = () => {
    return useQuery<TResponse<TCategory[]>>({
        queryKey: ['category'],
        queryFn: () => categoryRequest(),
    })
}