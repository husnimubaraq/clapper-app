import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { useToastContext } from "contexts";
import { Button, Input, Text } from "components/base";
import { TUpdateProfileRequest, updateProfileRequest } from "features/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { schemaValidation } from './validation'
import { StackNavigation } from "types";
import { Header } from "layouts/default/components";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { InputPassword } from "components/input-password";
import { colors } from "themes";
import { CardIcon, CheckIcon, LockIcon, MainIcon, PhoneIcon, UserIcon } from "components/icons";
import { useAuthStore } from "stores";
import { useInvalidateQuery } from "hooks";

const UpdateProfileForm = () => {
    const { goBack, navigate } = useNavigation<StackNavigation>()

    const { showToast } = useToastContext()

    const auth = useAuthStore((state: any) => state.auth)
    const token = useAuthStore((state: any) => state.token)

    const invalidate = useInvalidateQuery('profile')

    const formMethods = useForm<TUpdateProfileRequest>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            token: token,
            username: auth?.pengguna_username,
            email: auth?.pengguna_email,
            name: auth?.pengguna_nama,
            phone: auth?.pengguna_notelp,
        }
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (params: TUpdateProfileRequest) => updateProfileRequest(params),
        onSuccess: async (data) => {
            invalidate()
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
                    title="Update Profile"
                />
                <KeyboardAwareScrollView
                    className="bg-[#fff]"
                >
                    <View className="flex-1 pt-5">
                        <View className="px-5 bg-[#C4C4C4D9] mx-5 pt-5 pb-6 rounded-xl">
                            <FormProvider {...formMethods}>
                                <Input
                                    name="username"
                                    placeholder="Username"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <UserIcon color={colors.palette.neutral80} />
                                    }
                                />

                                <Input
                                    name="name"
                                    placeholder="Nama"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <UserIcon color={colors.palette.neutral80} />
                                    }
                                />

                                <Input
                                    name="email"
                                    placeholder="Email"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <MainIcon color={colors.palette.neutral80} />
                                    }
                                    keyboardType="email-address"
                                />

                                <Input
                                    name="phone"
                                    placeholder="No. Hp"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <PhoneIcon color={colors.palette.neutral80} />
                                    }
                                    keyboardType="number-pad"
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

export default UpdateProfileForm
