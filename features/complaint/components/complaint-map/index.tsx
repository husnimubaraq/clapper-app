import { useMutation } from "react-query";
import React, { LegacyRef, useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { VH, VW } from "utils";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';
import { Text } from "components/base";
import { colors } from "themes";
import { ComplaintDetail } from "features/complaint";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "types";

const ASPECT_RATIO = VW / VH;
const LATITUDE = -7.801335145093938;
const LONGITUDE = 110.36480164512592;
const LATITUDE_DELTA = 0.0052;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const ComplaintMap = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, 'ComplaintDetail'>>() 

    const map = useRef<any>();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['45%', '50%'], []);

    const [region, setRegion] = useState<Region>({
        latitude: Number(params?.pelaporan_latitude),
        longitude: Number(params?.pelaporan_longitude),
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    })

    const containerInsets = useSafeAreaInsets()

    return (
        <>
            <View>
                <MapView
                    ref={map}
                    style={styles.map}
                    initialRegion={region}
                >
                    <Marker
                        coordinate={{
                            latitude: Number(params?.pelaporan_latitude),
                            longitude: Number(params?.pelaporan_longitude),
                        }}
                        pinColor='red'
                    />
                </MapView>
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                handleIndicatorStyle={{
                    backgroundColor: colors.background
                }}
                backgroundStyle={{
                    backgroundColor: '#1B4C60'
                }}
            >
                <View className="flex-1 bg-[#1B4C60]">
                    <ComplaintDetail data={params} />
                </View>
            </BottomSheet>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '80%'
    },
});
