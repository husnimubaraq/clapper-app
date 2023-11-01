import { axiosInstance } from 'apis'
import { TRegisterRequest, TRegisterOtpRequest, TRegisterPasswordRequest } from 'features/auth'

export const registerRequest = async (request: TRegisterRequest) => {

    const body = new FormData();

    body.append("data[type]", "new")
    body.append("data[phone]", request.phone ?? '')
    body.append("data[name]", request.name ?? '')
    body.append("data[address]", request.address ?? '')
    body.append("data[birth_date]", request.birth_date ?? '')
    body.append("data[token_device]", '12345')
    body.append("use_encrypt", 'false')

    const { data } = await axiosInstance.post('/authentication/registration', body)

    return data
}

export const registerOtpRequest = async (request: TRegisterOtpRequest) => {

    const body = new FormData();

    body.append("data[type]", "otp")
    body.append("data[phone]", request.phone)
    body.append("data[name]", request.name)
    body.append("data[address]", request.address)
    body.append("data[birth_date]", request.birth_date)
    body.append("data[otp]", request.otp)
    body.append("data[token_device]", '12345')
    body.append("use_encrypt", 'false')

    const { data } = await axiosInstance.post('/authentication/registration', body)

    return data
}

export const registerPasswordRequest = async (request: TRegisterPasswordRequest) => {

    const body = new FormData();

    body.append("data[type]", "password")
    body.append("data[phone]", request.phone)
    body.append("data[name]", request.name)
    body.append("data[address]", request.address)
    body.append("data[birth_date]", request.birth_date)
    body.append("data[otp]", request.otp)
    body.append("data[password]", request.password)
    body.append("data[password_confirm]", request.password_confirm)
    body.append("data[token_device]", '12345')
    body.append("use_encrypt", 'false')

    const { data } = await axiosInstance.post('/authentication/registration', body)

    return data
}