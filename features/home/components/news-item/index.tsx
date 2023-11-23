import React from "react"
import { TouchableOpacity, View, Image } from "react-native"
import {twMerge} from 'tailwind-merge'

import { BellIcon, ChevronLeftIcon } from "components/icons"

import { colors, spacing } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types/navigator"
import { Text } from "components/base"
import { VW } from "utils"
import { TProps } from "./type"

export const NewsItem = (props: TProps) => {
    const { data } = props

    const { navigate } = useNavigation<StackNavigation>()

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            className="py-3 border-b border-neutral-400"
            onPress={() => navigate('NewsDetail', data)}
        >
            <View className="flex-row mb-3">
                <Image
                    source={{uri: data.berita_foto}}
                    className="w-[97px] h-[87px]"
                    borderRadius={spacing.medium}
                />

                <View className="flex-1 ml-3">
                    <Text textClassName="text-base" variant="medium">{data.berita_judul}</Text>
                    <Text textClassName="text-md" variant="light">{data.berita_uraian}</Text>
                </View>
            </View>

            <Text textClassName="text-md text-right" variant="light">{data.berita_tanggal}</Text>
        </TouchableOpacity>
    )
}