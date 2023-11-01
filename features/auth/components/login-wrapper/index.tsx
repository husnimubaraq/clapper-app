import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
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
        <View className="flex-1 bg-white">
          <View className="my-[20%] items-center">
            <View className="w-[100px] h-[100px] items-center justify-center rounded-full bg-[#f5f5f5]">
              <Text className="text-base">Logo</Text>
            </View>
          </View>

          <View className="w-full px-5">
            <FormProvider {...formMethods}>
              <Input
                label="No HP"
                name="phone"
                placeholder="Input no HP"
                containerClassName="mb-5"
                inputClassName="text-black"
                keyboardType='number-pad'
              />

              <InputPassword
                label="Password"
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
