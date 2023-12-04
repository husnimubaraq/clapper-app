import { useQuery } from "react-query"
import { TResponse } from "types"
import { TComplaint, checkScheduleRequest } from "features/complaint"

export const useGetCheckSchedule = () => {
    return useQuery<TResponse<{}>>({
        queryKey: ['schedule'],
        queryFn: () => checkScheduleRequest(),
    })
}