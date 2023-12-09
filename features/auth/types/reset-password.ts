export type TResetPasswordRequest = {
    email: string
    username: string
}

export type TResetPasswordFormRequest = {
    email: string
    username: string
    password: string
    password_confirmation: string
}