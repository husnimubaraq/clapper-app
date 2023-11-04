import React from "react"
import { TouchableOpacity, View } from "react-native"
import {twMerge} from 'tailwind-merge'

import { BellIcon, ChevronLeftIcon } from "components/icons"

import { TProps } from "./type"
import { colors } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types/navigator"
import { Text } from "components/base"

export const Header = (props: TProps) => {
    const { 
        title, 
        onBack, 
        rightComponent,
    } = props

    const { goBack } = useNavigation<StackNavigation>()

    return (
        <View 
            className={twMerge(
                'py-5 bg-white flex-row items-center px-5',
            )}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    onBack ? onBack() : goBack()
                }}
                className='mr-2'
            >
                <ChevronLeftIcon width={20} height={20} color={colors.text} />
            </TouchableOpacity>

            <Text 
                textClassName={twMerge(
                    'ml-3 text-lg text-black',
                )}
            >
                {title}
            </Text>

            {rightComponent ? (
                rightComponent
            ) : (
                <View/>
            )}
        </View>
    )
}