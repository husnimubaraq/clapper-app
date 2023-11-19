import { axiosInstance } from 'apis'
import { TLoginRequest } from 'features/auth'

export const loginRequest = async (request: TLoginRequest) => {

    const body = new FormData();

    body.append("LoginForm[username]", request.username)
    body.append("LoginForm[password]", request.password)
    body.append("api", 'login')

    const { data } = await axiosInstance.post('/site/login', body)

    return data
}