import { axiosInstance } from 'apis'

export const newsRequest = async () => {

    const { data } = await axiosInstance.get('/warga/Berita')

    return data
}