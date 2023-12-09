import { useQuery } from "react-query"
import { TResponse } from "types"
import { TAuth, profileRequest } from "features/auth"
import { useAuthStore } from "stores"

export const useGetProfile = () => {
    const auth = useAuthStore((state: any) => state.auth)
    const setAuthState = useAuthStore((state: any) => state.setAuthState)

    return useQuery<TResponse<TAuth[]>>({
        queryKey: ['profile'],
        queryFn: () => profileRequest(),
        onSuccess: (data) => {
            setAuthState({
                ...auth,
                ...data.data
            })
        }
    })
}