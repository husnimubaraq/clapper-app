import { axiosInstance } from 'apis'

export const complaintRequest = async () => {

    const { data } = await axiosInstance.get('/warga/pelaporan')

    return data
}