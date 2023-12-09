import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { UploadPopup } from "features/profile";
import { VH, VW } from "utils";
import { LogoutIcon, UserIcon } from "components/icons";
import { Text } from "components/base";
import { colors } from "themes";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types";
import { useAuthStore } from "stores";
import { useGetProfile } from "features/auth";

const ProfileWrapper = () => {
  const { navigate, dispatch } = useNavigation<StackNavigation>()

  useGetProfile()

  const auth = useAuthStore((state: any) => state.auth)
  const setAuthState = useAuthStore((state: any) => state.setAuthState)
  const setToken = useAuthStore((state: any) => state.setToken)

  const [isOpen, setIsOpen] = useState(false)

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
              source={{ uri: auth?.pengguna_foto }}
              style={{
                height: VW / 2,
                width: VW / 2
              }}
              borderRadius={100}
            />

            <Text variant="medium" textClassName="text-2xl mt-3">{auth?.pengguna_nama}</Text>
          </View>

          <View className="mt-3  bg-white rounded-xl mb-5 p-3">
            <View className="mb-3">
              <Text textClassName="text-neutral-400">Username</Text>
              <Text textClassName="text-black mt-1">{auth?.pengguna_username}</Text>
            </View>
            <View className="mb-3">
              <Text textClassName="text-neutral-400">Email</Text>
              <Text textClassName="text-black mt-1">{auth?.pengguna_email ? auth?.pengguna_email : '-'}</Text>
            </View>
            <View className="mb-3">
              <Text textClassName="text-neutral-400">No. Telp</Text>
              <Text textClassName="text-black mt-1">{auth?.pengguna_notelp ? auth?.pengguna_notelp : '-'}</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsOpen(true)}
              className="flex-row items-center border border-[#1B4C60B2] rounded-md py-3 px-4 shadow-md mb-3 bg-white"
            >
              <UserIcon height={20} width={20} color={colors.palette.primary} />

              <Text textClassName="ml-2">Ubah Foto Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate('UpdateProfileForm')}
              className="flex-row items-center border border-[#1B4C60B2] rounded-md py-3 px-4 shadow-md mb-3 bg-white"
            >
              <UserIcon height={20} width={20} color={colors.palette.primary} />

              <Text textClassName="ml-2">Ubah Profil</Text>
            </TouchableOpacity>

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
        <UploadPopup
          isOpen={isOpen}
          onCancel={setIsOpen}
        />
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default ProfileWrapper
