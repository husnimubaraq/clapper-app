import React, { useState } from "react"
import { TouchableOpacity, View, Image } from "react-native"
import { twMerge } from 'tailwind-merge'

import { BellIcon, ChevronLeftIcon } from "components/icons"

import { colors, spacing } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types/navigator"
import { Button, Text } from "components/base"
import { VW } from "utils"
import { TProps } from "./type"
import { ImageZoom } from "components/image-zoom"

export const ComplaintDetail = (props: TProps) => {
    const { data } = props

    const { navigate } = useNavigation<StackNavigation>()

    const [isOpen, setIsOpen] = useState(false)

    console.log('data.pelaporan_foto: ', data.pelaporan_foto)

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
                {data.pelaporan_status === 'Dibatalkan' ? (
                    <Text textClassName="text-white">{data.pelaporan_alasanbatal}</Text>
                ) : (
                    <Text textClassName={twMerge(
                        data.pelaporan_status ? 'text-white' : 'text-red-400'
                    )}>{data.pelaporan_status ? data.pelaporan_status : 'Belum teratasi'}</Text>
                )}
            </View>

            {data.pelaporan_status === 'Teratasi' ? (
                <Button
                    variant="default"
                    title="Lihat Foto"
                    className="mb-3 w-[50%] self-center mt-5"
                    classNameText="text-black"
                    fontVariant="normal"
                    onPress={() => setIsOpen(true)}
                />
            ) : (
                <Button
                    variant="default"
                    title="Update Status"
                    className="mb-3 w-[50%] self-center mt-5"
                    classNameText="text-black"
                    fontVariant="normal"
                    onPress={() => navigate('UpdateComplaint', data)}
                />
            )}
            
            {data.pelaporan_foto && (
                <ImageZoom url={data.pelaporan_foto ?? ''} isOpen={isOpen} onCancel={setIsOpen} />
            )}
        </View>
    )
}