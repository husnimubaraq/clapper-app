
export type TResponse<T> = {
    data: {
        code: string
        use_encrypt: string
        message: string
        data: T
    }
    message?: string
    status: boolean
}

export type TAppInfo = {
    version: number
    need_update: string
    message: string
    link: string
    "link-ios": string
}