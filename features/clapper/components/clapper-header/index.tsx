import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { VH } from "utils";
import { ClapperMap } from 'features/clapper'
import { BackspaceIcon, LocationIcon } from "components/icons";
import { colors } from "themes";

export const ClapperHeader = () => {

  const containerInsets = useSafeAreaInsets()

  return (
    <View
        className="absolute right-0 left-0"
        style={{
            top: -60,
            zIndex: 1000
        }}
    >
        <View className="flex-row items-center justify-between px-5">
            <TouchableOpacity
                activeOpacity={0.8}
                className="bg-[#1B4C60] rounded-full items-center justify-center h-[40px] w-[40px]"
            >
                <BackspaceIcon color={colors.background} />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                className="bg-[#1B4C60] rounded-full items-center justify-center h-[40px] w-[40px]"
            >
                <LocationIcon width={24} height={24} className="mr-1" color={colors.background} />
            </TouchableOpacity>
        </View>
    </View>
  );
};
