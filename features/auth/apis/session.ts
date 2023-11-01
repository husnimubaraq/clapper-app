import { axiosInstance } from 'apis'
import { TSessionRequest } from 'features/auth'

export const sessionRequest = async (request: TSessionRequest) => {

    const body = new FormData();

    body.append("process", "check_login")
    body.append("key", request.key)
    body.append("current_url", request.current_url)
    
    const { data } = await axiosInstance.post('/general', body)

    return data.data
}