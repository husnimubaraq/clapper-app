import { axiosInstance } from 'apis'
import { TCreateComplaint, TUpdateComplaint } from 'features/complaint'

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

export const updateComplaintRequest = async (request: TUpdateComplaint) => {

    const body = new FormData();

    body.append("token", request.token)
    body.append("pelaporan_id", request.pelaporan_id)
    body.append("status", request.status.key)
    body.append("alasanbatal", request.alasanbatal)

    //@ts-ignore
    body.append('lampiran', {
        uri: request.lampiran,
        name: new Date().toDateString() + ".jpeg",
        type: 'image/jpeg'
    })

    const { data } = await axiosInstance.post('/warga/updatepelaporan', body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return data
}