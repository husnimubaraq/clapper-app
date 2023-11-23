import { useMutation } from "react-query";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, View, StyleSheet, ListRenderItem, FlatList, ScrollView } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { VH, VW } from "utils";
import { Header } from "layouts/default/components";
import { ComplaintMap } from "features/complaint";
import { colors, spacing } from "themes";

const ComplaintDetailWrapper = () => {

    const containerInsets = useSafeAreaInsets()

    return (
        <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
            <SafeAreaProvider>
                <Header
                    title="Detail Aduan"
                />

                <ComplaintMap/>
            </SafeAreaProvider>
        </SafeAreaView>
    );
};

export default ComplaintDetailWrapper
