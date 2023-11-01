import { axiosInstance } from 'apis'
import { TLoginRequest } from 'features/auth'

export const loginRequest = async (request: TLoginRequest) => {

    const body = new FormData();

    body.append("data[phone]", request.phone)
    body.append("data[password]", request.password)
    body.append("data[token_device]", '12345')

    const { data } = await axiosInstance.post('/authentication/login', body)

    return data
}