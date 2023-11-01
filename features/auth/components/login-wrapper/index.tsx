import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { Text, View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { useToastContext } from "contexts";
import { Button, Input } from "components/base";
import { TLoginRequest, loginRequest } from "features/auth";
import { useAuthStore } from "stores";

import { schemaValidation } from './validation'
import { StackNavigation } from "types";
import { withAuth } from "hoc";
import { HeaderAuth } from "layouts/default";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { InputPassword } from "components/input-password";

const LoginWrapper = () => {
  const { dispatch, navigate } = useNavigation<StackNavigation>()
  const setAuthState = useAuthStore((state: any) => state.setAuthState)

  const { showToast } = useToastContext()

  const formMethods = useForm<TLoginRequest>({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      phone: '',
      password: '',
    }
  })

  const { handleSubmit, setError } = formMethods

  const onSubmit = handleSubmit((params) => {
    
  })

  const containerInsets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
      <SafeAreaProvider>
        <View className="flex-1 bg-[#1B4C60A6]">
          <View className="my-[20%] items-center">
            <Image
              source={require('assets/images/logo.png')}
              className="w-[134px] h-[128px]"
            />
            <Text className="text-2xl mt-5 font-bold text-white">E KENTONGAN  KLODRAN CITY</Text>
          </View>

          <View className="px-5 bg-[#C4C4C4D9] mx-5 py-5 rounded-xl">
            <Text className="text-center">LOGIN  APLIKASI</Text>

            <FormProvider {...formMethods}>
              <Input
                name="phone"
                placeholder="Input no HP"
                containerClassName="mb-5"
                inputClassName="text-black"
                keyboardType='number-pad'
              />

              <InputPassword
                name="password"
              />

              <Button
                variant="primary"
                title="LOGIN"
                className="my-3"
                onPress={onSubmit}
              />
            </FormProvider>
          </View>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default withAuth(LoginWrapper)
