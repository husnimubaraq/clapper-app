import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuthStore } from "stores";
import { withAuth } from '../../../../hoc/with-auth';

const HomeWrapper = () => {
  const auth = useAuthStore((state: any) => state.auth)
  const setAuthState = useAuthStore((state: any) => state.setAuthState)

  const containerInsets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
      <SafeAreaProvider>
        <View className="flex-1">
          
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default withAuth(HomeWrapper)
