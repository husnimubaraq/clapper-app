import { axiosInstance } from 'apis'
import { TCommentRequest } from 'features/home'

export const newsRequest = async () => {

    const { data } = await axiosInstance.get('/warga/Berita')

    return data
}

export const commentRequest = async (id: string) => {

    const { data } = await axiosInstance.get('/warga/komentarberita', {
        params: {
            berita_id: id
        }
    })

    return data
}

export const createCommentRequest = async (request: TCommentRequest) => {
    const { message, berita_id, token } = request

    const body = new FormData();

    body.append("token", token ?? '')
    body.append("berita_id", berita_id ?? '')
    body.append("komentar", message)

    const { data } = await axiosInstance.post('/warga/komentarberita', body)

    return data
}
