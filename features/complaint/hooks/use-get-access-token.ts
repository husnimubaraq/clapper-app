import { useQuery } from "react-query"
import { TResponse } from "types"
import { getAccessTokenRequest } from "features/complaint/apis"

export const useGetAccessToken = () => {
    return useQuery({
        queryKey: ['access-token'],
        queryFn: () => getAccessTokenRequest(),
    })
}