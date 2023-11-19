import { axiosInstance } from 'apis'
import { TRegisterRequest } from 'features/auth'

export const registerRequest = async (request: TRegisterRequest) => {

    const body = new FormData();

    body.append("email", request.email)
    body.append("nama", request.name)
    body.append("notelp", request.phone)
    body.append("username", request.username)
    body.append("password", request.password)

    const { data } = await axiosInstance.post('/publik/registrasi', body)

    return data
}