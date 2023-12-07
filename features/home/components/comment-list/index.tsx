import React, { useCallback } from "react"
import { TouchableOpacity, View, Image, ListRenderItem, FlatList } from "react-native"
import { twMerge } from 'tailwind-merge'

import { BellIcon, ChevronLeftIcon } from "components/icons"

import { colors, spacing } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types/navigator"
import { Text } from "components/base"
import { VH, VW } from "utils"
import { TNews, NewsItem, news, useGetNews, TComment, CommentInput } from "features/home"
import { useAuthStore } from "stores"
import { useGetComment } from "features/home"
import { TProps } from './type'

export const CommentList = (props: TProps) => {
    const { data } = props

    const { data: dataComment } = useGetComment(data.berita_id)

    const renderItem = useCallback<ListRenderItem<TComment>>(({ item }) => (
        <View className="flex-row items-center mb-3">
            <Image
                source={{ uri: item.tblpengguna_foto }}
                className="w-[32px] h-[32px]"
                borderRadius={50}
            />

            <View className="flex-1 ml-3">
                <Text variant="medium" textClassName="text-base">{item.tblpengguna_nama}</Text>
                <Text variant="light" textClassName="text-sm">{item.beritadetail_komentar}</Text>
            </View>
        </View>
    ), [])


    return (
        <>
            <View className="border-b border-neutral-300 py-3 flex-row items-center justify-between mt-5">
                <Text textClassName="text-sm">{dataComment?.data?.length ?? 0} Komentar</Text>
                <Text textClassName="text-sm text-[#A9A9A9]">{data.berita_tanggal}</Text>
            </View>

            <FlatList
                data={dataComment?.data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: spacing.medium,
                    paddingBottom: VW / 3
                }}
            />
        </>
    )
}