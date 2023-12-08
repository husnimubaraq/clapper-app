import { useMutation } from "react-query";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Image, ListRenderItem, FlatList, ScrollView } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { VH, VW } from "utils";
import { Header } from "layouts/default/components";
import { ComplaintMap } from "features/complaint";
import { colors, spacing } from "themes";
import { useAuthStore } from "stores";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "types";
import { Text } from "components/base";
import { CommentInput, CommentList } from "features/home";

const NewsDetailWrapper = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, 'NewsDetail'>>() 

    const containerInsets = useSafeAreaInsets()

    return (
        <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
            <SafeAreaProvider>
                <Header
                    title="Detail Berita"
                />

                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                >
                    <View className="flex-1 bg-[#E4ECEF] px-5">
                        <Text textClassName="text-[#3E6777] text-center mt-3" variant="bold">{params.berita_judul}</Text>

                        <View className="mt-3 mb-5">
                            <Image
                                source={{uri: params?.berita_foto}}
                                style={{
                                    height: VW / 2,
                                    width: '100%',
                                }}
                                borderRadius={10}
                                resizeMode="contain"
                            />
                            
                        </View>

                        <Text className="text-sm leading-4">{params.berita_uraian}</Text>

                        <CommentList data={params} />
                    </View>
                </ScrollView>
                
                <CommentInput data={params} />
            </SafeAreaProvider>
        </SafeAreaView>
    );
};

export default NewsDetailWrapper
