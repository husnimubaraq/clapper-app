import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeHeader, News } from "features/home";
import { VH } from "utils";

const ProfileWrapper = () => {

  const containerInsets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
      <SafeAreaProvider>
        <View 
          className="flex-1 bg-[#E4ECEF]"
        >

        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default ProfileWrapper
