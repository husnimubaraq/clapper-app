import { axiosInstance } from 'apis'
import { TForgotPasswordRequest, TForgotPasswordOtpRequest, TForgotPasswordUpdatePasswordRequest } from 'features/auth'

export const forgotPasswordRequest = async (request: TForgotPasswordRequest) => {

    const body = new FormData();

    body.append("data[type]", "new")
    body.append("data[phone]", request.phone ?? '')
    body.append("data[token_device]", '12345')
    body.append("use_encrypt", 'false')

    const { data } = await axiosInstance.post('/authentication/forgot-password', body)

    return data
}

export const forgotPasswordOtpRequest = async (request: TForgotPasswordOtpRequest) => {

    const body = new FormData();

    body.append("data[type]", "otp")
    body.append("data[phone]", request.phone)
    body.append("data[otp]", request.otp)
    body.append("data[token_device]", '12345')
    body.append("use_encrypt", 'false')

    const { data } = await axiosInstance.post('/authentication/forgot-password', body)

    return data
}

export const forgotPasswordUpdatePasswordRequest = async (request: TForgotPasswordUpdatePasswordRequest) => {

    const body = new FormData();

    body.append("data[type]", "password")
    body.append("data[phone]", request.phone)
    body.append("data[otp]", request.otp)
    body.append("data[password]", request.password)
    body.append("data[password_confirm]", request.password_confirm)
    body.append("data[token_device]", '12345')
    body.append("use_encrypt", 'false')

    const { data } = await axiosInstance.post('/authentication/forgot-password', body)

    return data
}