export type TLoginRequest = {
    username: string
    password: string
}

export type TLogin = {
    pesan: string
    token: string
}

export type TAuth = {
    aud: string
    iat: string
    exp: string
    issued_at: string
    expired_at: string
    pengguna_id: string
    pengguna_nama: string
    pengguna_username: string
    pengguna_foto: string
    role_id: string
}