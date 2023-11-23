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

export const ComplaintDetail = (props: TProps) => {
    const { data } = props

    const { navigate } = useNavigation<StackNavigation>()

    return (
        <View className="px-5 mt-10">
            <View className="flex-row items-center justify-between mb-3">
                <Text textClassName="text-white">Kode laporan</Text>
                <Text textClassName="text-white">{data.pelaporan_kode}</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
                <Text textClassName="text-white">Pelapor</Text>
                <Text textClassName="text-white">{data.pengguna_nama}</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
                <Text textClassName="text-white">Kategori</Text>
                <Text textClassName="text-white">{data.kategoripelaporan_nama}</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
                <Text textClassName="text-white">Tanggal</Text>
                <Text textClassName="text-white">{data.pelaporan_tanggal}</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
                <Text textClassName="text-white">Jam</Text>
                <Text textClassName="text-white">{data.pelaporan_jam}</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
                <Text textClassName="text-white">Status</Text>
                <Text textClassName="text-white">{data.pelaporan_status ? data.pelaporan_status : 'Proses'}</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
                <Text textClassName="text-white">Keterangan</Text>
                <Text textClassName={twMerge(
                    data.pelaporan_status ? 'text-white' : 'text-red-400'
                )}>{data.pelaporan_status ? data.pelaporan_status : 'Belum teratasi'}</Text>
            </View>

            <Button
                variant="default"
                title="Update Status"
                className="mb-3 w-[50%] self-center mt-5"
                classNameText="text-black"
                fontVariant="normal"
            />
        </View>
    )
}