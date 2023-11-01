export type TRegisterRequest = {
    name?: string
    address?: string
    phone?: string
    birth_date?: string
}

export type TRegisterOtpRequest = {
    name: string
    address: string
    phone: string
    birth_date: string
    otp: string
}

export type TRegisterPasswordRequest = {
    name: string
    address: string
    phone: string
    birth_date: string
    otp: string
    password: string
    password_confirm: string
}