import { axiosInstance } from 'apis'
import { TResetPasswordRequest, TResetPasswordFormRequest } from 'features/auth'

export const resetPasswordRequest = async (request: TResetPasswordRequest) => {

    const body = new FormData();

    const { data } = await axiosInstance.get('/publik/resetpassword', {
        params: {
            email: request.email,
            username: request.username
        }
    })

    return data
}

export const resetPasswordFormRequest = async (request: TResetPasswordFormRequest) => {

    const body = new FormData();

    body.append("email", request.email)
    body.append("username", request.username)
    body.append("password", request.password)

    const { data } = await axiosInstance.post('/publik/resetpassword', body)

    return data
}