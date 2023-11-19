import { axiosInstance } from 'apis'

export const categoryRequest = async () => {

    const { data } = await axiosInstance.get('/warga/Kategoripelaporan')

    return data
}