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
import { CategoryList, ClapperHeader } from "features/clapper";

const ASPECT_RATIO = VW / VH;
const LATITUDE = -7.801335145093938;
const LONGITUDE = 110.36480164512592;
const LATITUDE_DELTA = 0.0052;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const ClapperMap = () => {
    const map = useRef<any>();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['65%', '70%'], []);

    const [region, setRegion] = useState<Region>({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    })

    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied')
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            })
            setLocation(location);
            map.current.fitToCoordinates(location.coords)
        })();
    }, []);

    const containerInsets = useSafeAreaInsets()

    return (
        <>
            <View>
                {location && (
                    <MapView
                        ref={map}
                        style={styles.map}
                        initialRegion={region}
                    >
                        <Marker
                            coordinate={{
                                latitude: location?.coords.latitude ?? 0,
                                longitude: location?.coords.longitude ?? 0
                            }}
                            pinColor='red'
                        />
                    </MapView>
                )}
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
                //@ts-ignore
                headerComponent={
                    <ClapperHeader/>
                }
            >
                <View className="flex-1 bg-[#1B4C60]">
                    <CategoryList/>
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
        height: '60%'
    },
});
