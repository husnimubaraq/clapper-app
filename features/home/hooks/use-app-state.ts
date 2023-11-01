import { CommonActions, useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { AppState, AppStateStatus } from "react-native"

export const useAppState = () => {
    const { dispatch } = useNavigation()

    const [dateOld, setDateOld] = useState(new Date())

    const onAppStateListener = (state: AppStateStatus) => {
        if (state === 'active') {

            const dateNew = new Date()
            const difference = dateNew.getTime() - dateOld.getTime()
            const result = Math.round(difference / 60000).toFixed(0)

            if (Number(result) > 1) {
                dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'Pin' },
                        ],
                    })
                );
            }
        } else if (state === 'background') {
            setDateOld(new Date())
        }
    }

    useEffect(() => {
        const subscription = AppState.addEventListener('change', onAppStateListener)

        return () => {
            subscription.remove()
        }
    }, [])
}