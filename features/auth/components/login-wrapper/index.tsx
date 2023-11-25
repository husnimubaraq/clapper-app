import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { useToastContext } from "contexts";
import { Button, Input, Text } from "components/base";
import { TLogin, TLoginRequest, loginRequest } from "features/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { schemaValidation } from './validation'
import { StackNavigation } from "types";
import { HeaderAuth } from "layouts/default";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { InputPassword } from "components/input-password";
import { colors } from "themes";
import { useAuthStore } from "stores";

import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

const LoginWrapper = () => {
  const { dispatch, navigate } = useNavigation<StackNavigation>()

  const tokenFcm = useAuthStore((state: any) => state.tokenFcm)
  const setToken = useAuthStore((state: any) => state.setToken)
  const setAuthState = useAuthStore((state: any) => state.setAuthState)

  const { showToast } = useToastContext()

  const formMethods = useForm<TLoginRequest>({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      username: '',
      password: '',
      fcm_token: tokenFcm
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: (params: TLoginRequest) => loginRequest(params),
    onSuccess: async (data: TLogin) => {

      const decoded = jwtDecode(data.token, {
        header: false
      });

      setToken(data.token)
      setAuthState(decoded)

      dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'BottomTab' },
          ],
        })
      );

    },
    onError: (error: any) => {
      showToast(error.pesan, 'error')
    }

  })


  const { handleSubmit, setError } = formMethods

  const onSubmit = handleSubmit((data) => {
    mutate(data)
  })

  const containerInsets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
      <SafeAreaProvider>
        <KeyboardAwareScrollView
          className="bg-[#1B4C60A6]"
        >
          <View className="flex-1">
            <View className="my-[20%] items-center">
              <Image
                source={require('assets/images/logo.png')}
                className="w-[134px] h-[128px]"
              />
              <Text textClassName="text-2xl mt-5 text-white" variant="bold">E KENTONGAN  KLODRAN CITY</Text>
            </View>

            <View className="px-5 bg-[#C4C4C4D9] mx-5 pt-5 pb-6 rounded-xl">
              <Text textClassName="text-center mb-5 text-xl">LOGIN  APLIKASI</Text>

              <FormProvider {...formMethods}>
                <Input
                  name="username"
                  placeholder="Masukan Username"
                  inputClassName="text-black"
                  className="bg-[#F4F4E6] rounded-md"
                />

                <InputPassword
                  name="password"
                />

                <Button
                  variant="primary"
                  title="LOGIN"
                  className="mb-3"
                  onPress={onSubmit}
                  loading={isLoading}
                />

                <View className="flex-row justify-between mt-5">
                  <View className="item-center">
                    <Text textClassName="text-center">Belum punya akun?</Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigate('Register')}
                    >
                      <Text textClassName="text-[#215096] text-center">Daftar</Text>
                    </TouchableOpacity>
                  </View>

                  <View className="item-center">
                    <Text textClassName="text-center">Lupa password?</Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigate('ResetPassword')}
                    >
                      <Text textClassName="text-[#215096] text-center">Reset</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </FormProvider>
            </View>
          </View>
        </KeyboardAwareScrollView>

      </SafeAreaProvider>
    </SafeAreaView >
  );
};

export default LoginWrapper
