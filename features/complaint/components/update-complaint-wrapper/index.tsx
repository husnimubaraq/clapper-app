import React from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from "react-native";
import { CommonActions, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { useToastContext } from "contexts";
import { Button, Input, Select, Text, Upload } from "components/base";
import { TUpdateComplaint, updateComplaintRequest } from "features/complaint";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { schemaValidation } from './validation'
import { statusOptions } from './data'
import { RootStackParamList, StackNavigation } from "types";
import { Header } from "layouts/default/components";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { InputPassword } from "components/input-password";
import { colors } from "themes";
import { CardIcon, CheckIcon, LockIcon, MainIcon, PhoneIcon } from "components/icons";
import { useInvalidateQuery } from "hooks";
import { useAuthStore } from "stores";
import { VW } from "utils";
import { ButtonBottom } from "components/button-bottom";

const UpdateComplaintWrapper = () => {
    const { goBack, navigate } = useNavigation<StackNavigation>()
    const { params } = useRoute<RouteProp<RootStackParamList, 'UpdateComplaint'>>()

    const token = useAuthStore((state: any) => state.token)

    const { showToast } = useToastContext()

    const invalidate = useInvalidateQuery('complaint')

    const formMethods = useForm<TUpdateComplaint>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            alasanbatal: '',
            status: {
                key: '',
                value: 'Pilih'
            },
            pelaporan_id: params?.pelaporan_id,
            token
        }
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (params: TUpdateComplaint) => updateComplaintRequest(params),
        onSuccess: async (data) => {
            console.log('data: ', data)
            showToast(data.pesan, 'success')
            invalidate()
            navigate('Complaint')
        },
        onError: (error: any) => {
            if (error.code === '2001') {
                Object.entries(error.errors).forEach(([key, value]) => {
                    setError(key as any, {
                        message: value as string
                    })
                });
            } else {
                showToast(error.pesan, 'error')
            }
        }
    })


    const { handleSubmit, setError, formState: {errors} } = formMethods

    console.log('errors: ', errors)

    const onSubmit = handleSubmit((data) => {
        mutate(data)
    })

    const containerInsets = useSafeAreaInsets()

    return (
        <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
            <SafeAreaProvider>
                <Header
                    title="Update Aduan"
                />
                <KeyboardAvoidingView
                    className="flex-1 bg-[#1B4C60A6]"
                >
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                            paddingBottom: VW / 1.5
                        }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View className="flex-1 px-5 bg-[#C4C4C4D9] mx-5 pt-5 pb-6 rounded-xl">
                            <FormProvider {...formMethods}>
                                <Select
                                    label="Status"
                                    name="status"
                                    inputClassName="mb-5"
                                    data={statusOptions as any}
                                />

                                <Input
                                    placeholder="Tulis alasan batal"
                                    name="alasanbatal"
                                    containerClassName="mb-5"
                                    multiline
                                    rows={5}
                                    numberOfLines={5}
                                />

                                <Upload
                                    name="lampiran"
                                    label="Lampiran"
                                />

                                <View className="absolute left-0 right-0 bottom-5">
                                    <Button
                                        variant="primary"
                                        title="UPDATE"
                                        className="mb-3 mx-5"
                                        onPress={onSubmit}
                                        loading={isLoading}
                                    />
                                </View>
                            </FormProvider>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </SafeAreaView >
    );
};

export default UpdateComplaintWrapper
