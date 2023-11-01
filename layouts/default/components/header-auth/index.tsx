import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { twMerge } from 'tailwind-merge'

import { ChevronLeftIcon } from "components/icons"

import { TProps } from "./type"
import { colors } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types"

export const HeaderAuth = (props: TProps) => {
    const {
        title, onBack,
    } = props

    const { goBack } = useNavigation<StackNavigation>()

    return (
        <View className="px-5 mb-5">
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    onBack ? onBack() : goBack()
                }}
                className={twMerge(
                    'py-3 bg-white mb-2 flex-row items-center'
                )}
            >
                <ChevronLeftIcon
                    color={colors.palette.primary}
                    width={10}
                    height={16}
                />

                <Text
                    className={twMerge(
                        'ml-5 text-[#102A83] text-base font-medium',
                    )}
                >
                    Kembali
                </Text>
            </TouchableOpacity>

            <Text className="text-2xl font-medium">{title}</Text>
        </View>
    )
}