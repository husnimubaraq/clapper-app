import { axiosInstance } from 'apis'
import { TCreateComplaint } from 'features/complaint'

export const complaintRequest = async () => {

    const { data } = await axiosInstance.get('/warga/pelaporan')

    return data
}

export const createComplaintRequest = async (request: TCreateComplaint) => {

    const body = new FormData();

    body.append("token", request.token)
    body.append("kategoripelaporan_id", request.kategoripelaporan_id)
    body.append("pelaporan_tanggal", request.pelaporan_tanggal)
    body.append("pelaporan_jam", request.pelaporan_jam)
    body.append("pelaporan_longitude", request.pelaporan_longitude)
    body.append("pelaporan_latitude", request.pelaporan_latitude)

    const { data } = await axiosInstance.post('/warga/pelaporan', body)

    return data
}