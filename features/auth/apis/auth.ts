import { axiosInstance } from 'apis'
import { TLoginRequest, TUpdateProfileRequest, TUpdatePhotoProfileRequest } from 'features/auth'

export const loginRequest = async (request: TLoginRequest) => {

    const body = new FormData();

    body.append("LoginForm[username]", request.username)
    body.append("LoginForm[password]", request.password)
    body.append("fcm_token", request.fcm_token ?? '')
    body.append("api", 'login')

    const { data } = await axiosInstance.post('/site/login', body)

    return data
}

export const profileRequest = async () => {

    const { data } = await axiosInstance.get('/warga/profil')

    return data
}

export const updateProfileRequest = async (request: TUpdateProfileRequest) => {

    const body = new FormData();

    body.append("token", request.token)
    body.append("pengguna_username", request.username)
    body.append("pengguna_nama", request.name)
    body.append("pengguna_email", request.email)
    body.append("pengguna_notelp", request.phone)

    const { data } = await axiosInstance.post('/warga/profil', body)

    return data
}

export const updatePhotoProfileRequest = async (request: TUpdatePhotoProfileRequest) => {

    const body = new FormData();

    body.append("token", request.token)
    
    //@ts-ignore
    body.append('foto', {
        uri: request.photo,
        name: new Date().toDateString() + ".jpeg",
        type: 'image/jpeg'
    })

    const { data } = await axiosInstance.post('/warga/uploadfoto', body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return data
}