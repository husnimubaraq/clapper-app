import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { useToastContext } from "contexts";
import { Button, Input, Text } from "components/base";
import { TLoginRequest, TRegisterRequest, registerRequest } from "features/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { schemaValidation } from './validation'
import { StackNavigation } from "types";
import { Header } from "layouts/default/components";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { InputPassword } from "components/input-password";
import { colors } from "themes";
import { CardIcon, CheckIcon, LockIcon, MainIcon, PhoneIcon } from "components/icons";

const RegisterWrapper = () => {
    const { goBack, navigate } = useNavigation<StackNavigation>()

    const { showToast } = useToastContext()

    const formMethods = useForm<TRegisterRequest>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            email: '',
            phone: '',
            name: '',
            username: '',
            password: '',
            password_confirm: ''
        }
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (params: TRegisterRequest) => registerRequest(params),
        onSuccess: async (data) => {
            showToast(data.pesan, 'success')
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
                    title="Daftar Akun"
                />
                <KeyboardAwareScrollView
                    className="bg-[#1B4C60A6]"
                >
                    <View className="flex-1 pt-5">

                        <Text textClassName="ml-5 mb-5 text-md text-white">Silahkan lengkapi isian dibawah ini untuk melakukan  pendaftaran akun</Text>

                        <View className="px-5 bg-[#C4C4C4D9] mx-5 pt-5 pb-6 rounded-xl">
                            <FormProvider {...formMethods}>
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    inputClassName="text-black"
                                    containerClassName="-mb-4"
                                    className="rounded-md"
                                    leftNode={
                                        <MainIcon color={colors.palette.neutral80} />
                                    }
                                    keyboardType="email-address"
                                />

                                <View className="flex-row items-center mb-3">
                                    <View className="h-[24px] w-[24px] items-center justify-center bg-[#56D38B] rounded-full">
                                        <CheckIcon width={20} height={20} color={colors.palette.neutral80} />
                                    </View>

                                    <Text textClassName="ml-2">Email bisa digunakan</Text>
                                </View>

                                <Input
                                    name="name"
                                    placeholder="Nama"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <CardIcon color={colors.palette.neutral80} />
                                    }
                                />

                                <Input
                                    name="phone"
                                    placeholder="No. Telp / Hp"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <PhoneIcon color={colors.palette.neutral80} />
                                    }
                                    keyboardType="number-pad"
                                />

                                <Input
                                    name="username"
                                    placeholder="Username"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <CardIcon color={colors.palette.neutral80} />
                                    }
                                />

                                <InputPassword
                                    name="password"
                                    leftNode={
                                        <LockIcon color={colors.palette.neutral80} />
                                    }
                                    className="rounded-l-md bg-white"
                                    rightNodeClassName='rounded-r-md bg-white'
                                />

                                <InputPassword
                                    name="password_confirm"
                                    leftNode={
                                        <LockIcon color={colors.palette.neutral80} />
                                    }
                                    className="rounded-l-md bg-white"
                                    rightNodeClassName='rounded-md bg-white'
                                />

                                <Button
                                    variant="primary"
                                    title="DAFTAR"
                                    className="mb-3"
                                    onPress={onSubmit}
                                    loading={isLoading}
                                />

                                <View className="mt-5">
                                    <Text textClassName="">Anda sudah punya akun?</Text>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigate('Login')}
                                    >
                                        <Text textClassName="text-[#215096] ">login disini</Text>
                                    </TouchableOpacity>
                                </View>
                            </FormProvider>
                        </View>
                    </View>
                </KeyboardAwareScrollView>

            </SafeAreaProvider>
        </SafeAreaView >
    );
};

export default RegisterWrapper
