import { axiosPublicInstance, axiosInstance } from 'apis'
import { TNotification, TNotificationNew } from 'types'

export const getAccessTokenRequest = async () => {

    const { data } = await axiosInstance.get('/publik/tokenfcm')

    return data
}

export const createNotificationNewRequest = async (request: TNotificationNew, token: string) => {

    const { data } = await axiosPublicInstance.post('https://fcm.googleapis.com//v1/projects/clapper-app/messages:send', request, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })

    return data
}

export const createNotificationRequest = async (request: TNotification) => {

    const { data } = await axiosPublicInstance.post('https://fcm.googleapis.com/fcm/send', request, {
        headers: {
            'Authorization': 'key=AAAA4AxTOwo:APA91bEuSIUYnA4JV7jjNm9KoMfLt9ATOZ8DHYQ-ty7KBTAxkdpcrD1Dhyu0D8-_2VMPMjdBj8MmfhME7UMSam8bTg_qCLIJohqYOULvZCwaSwgfWeZFt50UJbCbZhA288KDBh18ItDA',
            'Content-Type': 'application/json'
        }
    })

    return data
}