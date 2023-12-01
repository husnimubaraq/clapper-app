import React from "react"
import { TouchableOpacity, View, Image } from "react-native"
import { twMerge } from 'tailwind-merge'

import { BellIcon, ChevronLeftIcon } from "components/icons"

import { colors, spacing } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types/navigator"
import { Button, Text } from "components/base"
import { VW } from "utils"
import { TProps } from "./type"

export const ComplaintItem = (props: TProps) => {
    const { data } = props

    const { navigate } = useNavigation<StackNavigation>()

    const image = data?.pelaporan_foto ? {
        uri: data?.pelaporan_foto
    } : require('assets/images/avatar.png')

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            className="bg-[#C4C4C4D9] rounded-[10px] px-4 pt-2 pb-5 mb-4"
            onPress={() => navigate('ComplaintDetail', data)}
        >
            <Text textClassName="text-sm text-white text-center">Kode Aduan {data.pelaporan_kode}</Text>

            <View className="flex-row items-center mt-2">
                <View className="w-[46px] h-[46px] items-center justify-center shadow-xl shadow-green-500  bg-green-500 rounded-full">
                    <Image
                        source={image}
                        className="w-[45px] h-[45px]"
                        borderRadius={100}
                    />
                </View>

                <View className="flex-1 ml-3 flex-row items-center justify-between">
                    <View className="flex-1">
                        <Text textClassName="text-lg text-white" variant="medium">{data.pengguna_nama}</Text>
                        <Text textClassName="text-sm text-white">{data.pelaporan_tanggal} {data.pelaporan_jam}</Text>
                        <Text textClassName="text-sm text-white">{data.kategoripelaporan_nama}</Text>
                    </View>

                    <View className="bg-[#1B4C60B2] rounded-md py-2 w-[100px]">
                        <Text textClassName="text-white text-sm text-center" variant="medium">{data.pelaporan_status ? data.pelaporan_status : 'Proses'}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}