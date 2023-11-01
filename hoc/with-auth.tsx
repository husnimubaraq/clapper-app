import { useNavigation } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthStore } from "stores";
import { colors } from "themes";

type TProps = {
    
}

export function withAuth(
    WrapperComponent: FC
) {
    return (props: TProps) => {
        const navigation = useNavigation();

        const auth = useAuthStore((state: any) => state.auth)

        const [loading, setLoading] = useState(true)

        const checkToken = () => {
            if(Object.keys(auth).length > 0){
                setLoading(false)
            }else{
                setLoading(false)
                //@ts-ignore
                // navigation.navigate('Main')
            }
        }

        useEffect(() => {
            checkToken()
        }, [])

        if(loading){
            return (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size={'large'} color={colors.text} />
                </View>
            )
        }

        return (
            <WrapperComponent
                {...props}
            />
        )
    }
}