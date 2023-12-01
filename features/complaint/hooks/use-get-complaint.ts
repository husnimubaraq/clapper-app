import { useQuery } from "react-query"
import { TResponse } from "types"
import { TComplaint, complaintRequest } from "features/complaint"

export const useGetComplaint = (enabled = true) => {
    return useQuery<TResponse<TComplaint[]>>({
        queryKey: ['complaint'],
        queryFn: () => complaintRequest(),
        enabled
    })
}

export const useGetComplaintCount = () => {
    const { data } = useGetComplaint()

    return data?.data.filter((item) => item.pelaporan_status === 'Proses').length
}