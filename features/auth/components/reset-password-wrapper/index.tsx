import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { useToastContext } from "contexts";
import { Button, Input, Text } from "components/base";
import { TLoginRequest, TResetPasswordRequest, loginRequest } from "features/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { schemaValidation } from './validation'
import { StackNavigation } from "types";
import { Header } from "layouts/default/components";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { InputPassword } from "components/input-password";
import { colors } from "themes";
import { CardIcon, CheckIcon, LockIcon, MainIcon, PhoneIcon } from "components/icons";

const ResetPasswordWrapper = () => {
    const { dispatch, navigate } = useNavigation<StackNavigation>()

    const { showToast } = useToastContext()

    const formMethods = useForm<TResetPasswordRequest>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            email: '',
            phone: '',
        }
    })

    const { handleSubmit, setError } = formMethods

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
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
                                    placeholder="No. Telp / Hp"
                                    inputClassName="text-black"
                                    className="rounded-md"
                                    leftNode={
                                        <PhoneIcon color={colors.palette.neutral80} />
                                    }
                                    keyboardType="number-pad"
                                />

                                <Button
                                    variant="primary"
                                    title="RESET"
                                    className="mb-3"
                                    onPress={onSubmit}
                                />
                            </FormProvider>
                        </View>
                    </View>
                </KeyboardAwareScrollView>

            </SafeAreaProvider>
        </SafeAreaView >
    );
};

export default ResetPasswordWrapper
