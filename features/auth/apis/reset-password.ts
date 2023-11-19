import { axiosInstance } from 'apis'
import { TResetPasswordRequest } from 'features/auth'

export const resetPasswordRequest = async (request: TResetPasswordRequest) => {

    const body = new FormData();

    body.append("email", request.email)
    body.append("username", request.username)

    const { data } = await axiosInstance.post('/publik/resetpassword', body)

    return data
}