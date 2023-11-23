import { useQuery } from "react-query"
import { TResponse } from "types"
import { TComplaint, complaintRequest } from "features/complaint"

export const useGetComplaint = () => {
    return useQuery<TResponse<TComplaint[]>>({
        queryKey: ['complaint'],
        queryFn: () => complaintRequest(),
    })
}