
export type TResponse<T> = {
    status: string
    pesan: string
    data: T
}

export type TAppInfo = {
    version: number
    need_update: string
    message: string
    link: string
    "link-ios": string
}