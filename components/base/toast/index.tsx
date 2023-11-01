import { Text, View } from 'react-native'
import React from 'react'

import { TProps } from './type'
import { CheckIcon, XIcon } from 'components/icons'
import { colors } from 'themes'

export const Toast = (props: TProps) => {
    const { type, message } = props

    return (
        <View className="absolute bottom-5 left-0 right-0 ">
            <View className='flex-row items-center bg-black rounded-[50px] py-2 mx-5 px-5 self-center'>
                <View className='mr-2'>
                    {type === 'success' && (
                        <CheckIcon color={colors.palette.mainSuccess} />
                    )}

                    {type === 'error' && (
                        <XIcon color={colors.palette.mainDanger} />
                    )}
                </View>

                <Text className='text-white'>{message}</Text>
            </View>
        </View>
    )
}