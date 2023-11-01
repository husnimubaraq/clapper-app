import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import {twMerge} from 'tailwind-merge'

import { ChevronLeftIcon } from "components/icons"

import { TProps } from "./type"
import { variants } from "./data"
import { colors } from "themes"

export const Header = (props: TProps) => {
    const { 
        title, onBack, 
        variant = 'default',
        rightComponent
    } = props

    return (
        <View 
            className={twMerge(
                'py-3 bg-white mb-2 flex-row items-center justify-between',
                variants[variant].background
            )}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    onBack()
                }}
                className='mr-2'
            >
                <ChevronLeftIcon color={variants[variant].text} />
            </TouchableOpacity>

            <Text 
                className={twMerge(
                    'mr-5 text-base font-medium',
                    variants[variant].text
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