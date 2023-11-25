export type TComplaint = {
    pelaporan_kode: string
    pengguna_nama: string
    pelaporan_tanggal: string
    pelaporan_jam: string
    kategoripelaporan_nama: string
    pelaporan_status: string
    pelaporan_longitude: string
    pelaporan_latitude: string
    pelaporan_id: string
    pelaporan_alasanbatal: string
    pelaporan_foto: string
}

export type TCreateComplaint = {
    token: string
    kategoripelaporan_id: string
    pelaporan_tanggal: string
    pelaporan_jam: string
    pelaporan_longitude: string
    pelaporan_latitude: string
}

export type TUpdateComplaint = {
    token: string
    pelaporan_id: string
    status: {
        key: string
        value: string
    }
    alasanbatal: string
    lampiran: any
}