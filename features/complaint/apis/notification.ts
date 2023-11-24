import { axiosPublicInstance } from 'apis'
import { TNotification } from 'types'

export const createNotificationRequest = async (request: TNotification) => {

    const { data } = await axiosPublicInstance.post('https://fcm.googleapis.com/fcm/send', request, {
        headers: {
            'Authorization': 'key=AAAA4AxTOwo:APA91bEuSIUYnA4JV7jjNm9KoMfLt9ATOZ8DHYQ-ty7KBTAxkdpcrD1Dhyu0D8-_2VMPMjdBj8MmfhME7UMSam8bTg_qCLIJohqYOULvZCwaSwgfWeZFt50UJbCbZhA288KDBh18ItDA',
            'Content-Type': 'application/json'
        }
    })

    return data
}