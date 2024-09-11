export type TNotification = {
    to: string
    notification: {
        title: string
        body: string
        android_channel_id: string
    },
    data: {
        pengguna_nama: string
        id: string
    }
}

export type TNotificationNew = {
    message: {
        topic: string
        notification: {
            title: string
            body: string
        }
        data: {
            pengguna_nama: string
            id: string
        }
        android: {
            notification: {
                channel_id: string
            }
        }
    }
}