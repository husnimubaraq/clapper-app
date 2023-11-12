import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { VH } from "utils";
import { ClapperMap } from 'features/clapper'

const ClapperWrapper = () => {

  const containerInsets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
      <SafeAreaProvider>
        <View 
          className="flex-1 bg-[#E4ECEF]"
        >
          <ClapperMap/>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default ClapperWrapper
