
export type TNews = {
    berita_id: string
    pengguna_id: string
    berita_judul: string
    berita_tanggal: string
    berita_jam: string
    berita_uraian: string
    berita_foto: string
    berita_ispublish: string
    totalkomentar: string
}

export type TComment = {
    beritadetail_id: string
    berita_id: string
    pengguna_id: string
    tblpengguna_nama: string
    beritadetail_komentar: string
    tblpengguna_foto: string
}

export type TCommentRequest = {
    token: string
    berita_id: string
    message: string
}
