import { useMutation } from "react-query";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, View, StyleSheet, ListRenderItem, FlatList } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { VH, VW } from "utils";
import { Header } from "layouts/default/components";
import { useGetComplaint, TComplaint, ComplaintItem } from "features/complaint";
import { colors, spacing } from "themes";

const ComplaintWrapper = () => {

    const { data } = useGetComplaint()

    const renderItem = useCallback<ListRenderItem<TComplaint>>(({ item }) => (
        <ComplaintItem
            data={item}
        />
    ), [])

    const containerInsets = useSafeAreaInsets()

    return (
        <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
            <SafeAreaProvider>
                <Header
                    title="Daftar Aduan"
                />

                <FlatList
                    data={data?.data}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: spacing.medium,
                        paddingBottom: VW / 8,
                        paddingTop: spacing.medium,
                        backgroundColor: colors.palette.primary80,
                        flexGrow: 1
                    }}
                />
            </SafeAreaProvider>
        </SafeAreaView>
    );
};

export default ComplaintWrapper
