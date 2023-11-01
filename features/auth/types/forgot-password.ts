export type TForgotPasswordRequest = {
    phone?: string
}

export type TForgotPasswordOtpRequest = {
    phone: string
    otp: string
}

export type TForgotPasswordUpdatePasswordRequest = {
    phone: string
    otp: string
    password: string
    password_confirm: string
}