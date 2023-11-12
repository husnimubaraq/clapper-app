import React, { useCallback } from "react"
import { TouchableOpacity, View, ImageBackground, ListRenderItem, FlatList } from "react-native"
import { twMerge } from 'tailwind-merge'

import { BellIcon, ChevronLeftIcon } from "components/icons"

import { colors, spacing } from "themes"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "types/navigator"
import { Text } from "components/base"
import { VH, VW } from "utils"
import { TNews, NewsItem, news } from "features/home"

export const News = () => {

    const { navigate } = useNavigation<StackNavigation>()

    const renderItem = useCallback<ListRenderItem<TNews>>(({ item }) => (
        <NewsItem
            data={item}
        />
    ), [])


    return (
        <View
            className="bg-white rounded-xl mx-5 shadow-lg shadow-red-[#1B4C60B2]"
            style={{
                marginTop: -VW / 3.3,
            }}
        >
            <View className="border-b border-neutral-400 mx-2 px-4 py-3">
                <Text textClassName="text-lg">Berita</Text>
            </View>

            <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: spacing.medium,
                    paddingBottom: VW / 8,
                    paddingTop: spacing.medium
                }}
                style={{
                    height: VH / 1.47
                }}
            />
        </View>
    )
}