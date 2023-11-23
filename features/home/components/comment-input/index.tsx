import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuthStore } from "stores";
import { withAuth } from '../../../../hoc/with-auth';
import { Input, Text } from "components/base";
import { Header } from "layouts/default/components";
import { VW } from "utils";
import { colors } from "themes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types/navigator";
import { schemaValidation } from "./validation";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FormProvider, useForm } from "react-hook-form";
import { TCommentRequest, createCommentRequest } from "features/home";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInvalidateQuery } from "hooks/use-invalidate-query";
import { useToastContext } from "contexts";
import { TProps } from "./type";

dayjs.extend(relativeTime)

export const CommentInput = (props: TProps) => {
    const { data: params } = props

    const token = useAuthStore((state: any) => state.token)

    const { showToast } = useToastContext()

    const invalidate = useInvalidateQuery('comment')

    const formMethods = useForm<TCommentRequest>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            berita_id: params.berita_id,
            token: token ?? '',
            message: ''
        }
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (params: TCommentRequest) => createCommentRequest(params),
        onSuccess: async (data) => {
            invalidate()
            reset()
        },
        onError: (error: any) => {
            showToast(error.message, 'error')
        }
    })

    const { handleSubmit, reset} = formMethods

    const onSubmit = handleSubmit((data) => {
        mutate(data)
    })
    
    return (
        <View
            className={twMerge(
                'bottom-10 absolute left-0 right-0 bg-white'
            )}
            style={{
                zIndex: 100
            }}
        >
            <FormProvider {...formMethods}>
                <View className='flex-row justify-between items-center px-5 border-t border-neutral-300 py-5 bg-white'>
                
                    <Input
                        name="message"
                        inputContainerClassName="rounded-full border border-neutral-300 bg-[#F9F9F9]"
                        placeholder="Kirim komentar"
                        containerClassName="flex-1 h-15 "
                    />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onSubmit}
                        className="ml-3"
                    >
                        <Text textClassName="text-[#3E6777]" variant="medium">Kirim</Text>
                    </TouchableOpacity>
                </View>
            </FormProvider>
        </View>
    );
};