import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

export const useNotificationObserver = () => {

    useEffect(() => {
        let isMounted = true;

        Notifications.getLastNotificationResponseAsync()
            .then(response => {
                if (!isMounted || !response?.notification) {
                    return;
                }
                
                console.log('getLastNotificationResponseAsync: ', response)
            });

        const subscription = Notifications.addNotificationResponseReceivedListener(response => {
            console.log('addNotificationResponseReceivedListener: ',response.notification.request.content.data);
        });

        return () => {
            isMounted = false;
            subscription.remove();
        };
    }, []);
}
