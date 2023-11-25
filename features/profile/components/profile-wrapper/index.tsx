import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeHeader, News } from "features/home";
import { VH, VW } from "utils";
import { LogoutIcon } from "components/icons";
import { Text } from "components/base";
import { colors } from "themes";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types";
import { useAuthStore } from "stores";

const ProfileWrapper = () => {
  const { navigate, dispatch } = useNavigation<StackNavigation>()

  const auth = useAuthStore((state: any) => state.auth)
  const setAuthState = useAuthStore((state: any) => state.setAuthState)
  const setToken = useAuthStore((state: any) => state.setToken)

  const containerInsets = useSafeAreaInsets()

  const onLogout = () => {
    dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Login' },
        ],
      })
    );

    setAuthState({})
    setToken("")

  }

  return (
    <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
      <SafeAreaProvider>
        <View
          className="flex-1 bg-[#E4ECEF] px-5"
        >
          <View className="items-center mt-10 mb-5">
            <Image
              source={require('assets/images/avatar.png')}
              style={{
                height: VW / 2,
                width: VW / 2
              }}
              borderRadius={100}
            />

            <Text variant="medium" textClassName="text-2xl mt-3">{auth?.pengguna_nama}</Text>
          </View>

          <View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onLogout}
                className="flex-row items-center border border-[#1B4C60B2] rounded-md py-3 px-4 shadow-md mb-3 bg-white"
              >
                <LogoutIcon color={colors.palette.primary} />

                <Text textClassName="ml-2">Logout</Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default ProfileWrapper
