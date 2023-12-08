import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { CommonActions, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { useToastContext } from "contexts";
import { Button, Input, Text } from "components/base";
import { TLoginRequest, TResetPasswordFormRequest, TResetPasswordRequest, loginRequest, resetPasswordFormRequest } from "features/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { schemaValidation } from './validation'
import { RootStackParamList, StackNavigation } from "types";
import { Header } from "layouts/default/components";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { InputPassword } from "components/input-password";
import { colors } from "themes";
import { CardIcon, CheckIcon, LockIcon, MainIcon, PhoneIcon } from "components/icons";

const ResetPasswordForm = () => {
    const { goBack, navigate } = useNavigation<StackNavigation>()

    const { params } = useRoute<RouteProp<RootStackParamList, 'ResetPasswordForm'>>() 

    const { showToast } = useToastContext()

    const formMethods = useForm<TResetPasswordFormRequest>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            email: params?.email,
            username: params?.username,
            password: '',
            password_confirmation: '',
        }
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (params: TResetPasswordFormRequest) => resetPasswordFormRequest(params),
        onSuccess: async (data) => {
            showToast(data.pesan, 'success')
            goBack()
            goBack()
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
                <Header
                    title="Reset Password"
                />
                <KeyboardAwareScrollView
                    className="bg-[#1B4C60A6]"
                >
                    <View className="flex-1 pt-5">

                        <Text textClassName="ml-5 mb-5 text-md text-white">Silahkan lengkapi isian dibawah ini untuk melakukan reset password</Text>

                        <View className="px-5 bg-[#C4C4C4D9] mx-5 pt-5 pb-6 rounded-xl">
                            <FormProvider {...formMethods}>
                                <InputPassword
                                    name="password"
                                />

                                <InputPassword
                                    name="password_confirmation"
                                />

                                <Button
                                    variant="primary"
                                    title="SIMPAN"
                                    className="mb-3"
                                    onPress={onSubmit}
                                    loading={isLoading}
                                />
                            </FormProvider>
                        </View>
                    </View>
                </KeyboardAwareScrollView>

            </SafeAreaProvider>
        </SafeAreaView >
    );
};

export default ResetPasswordForm
