import { View, Modal, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TProps } from './type'
import { Button, Text } from 'components/base'
import { VH, VW } from 'utils';
import { colors } from 'themes';
import { get, useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { PictureIcon, XIcon } from 'components/icons';
import * as ImagePicker from 'expo-image-picker';

export const Upload = <TFormValues extends Record<string, unknown>>(
    props: TProps<TFormValues>
) => {
    const {
        label,
        className,
        name,
    } = props

    const [isOpen, setIsOpen] = useState(false)

    const {
        formState: { errors },
        watch,
        setValue
    } = useFormContext()

    const onGallery = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.canceled) {
            setValue(name as string, result?.assets[0]?.uri);
            setIsOpen(false)
        }
    }

    const onCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        if (!result.canceled) {
            setValue(name as string, result?.assets[0]?.uri);
            setIsOpen(false)
        }
    }

    const image = watch(name) as string

    const error = get(errors, name)

    return (
        <View className='mb-5 h-20'>
            {label && (
                <Text
                    textClassName="mb-2 text-md font-medium text-black"
                >
                    {label}
                </Text>
            )}

            <View
                className={twMerge(
                    'h-[166px] w-full rounded-md',
                    className,
                    !image && 'bg-slate-50 py-5 border border-neutral-300 border-dashed items-center'
                )}
            >
                {image ? (
                    <ImageBackground
                        source={{ uri: image }}
                        style={{
                            height: VW / 2.5,
                            width: '100%',
                            marginLeft: 0
                        }}
                        className='items-center justify-center'
                    >
                        <Button
                            title="Ubah Photo"
                            variant='outline'
                            onPress={() => setIsOpen(true)}
                            className='w-[47%] border border-white'
                            classNameText='text-white'
                            fontVariant='light'
                        />
                    </ImageBackground>
                ) : (
                    <>
                        <View className='w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EBF0FC] mb-4'>
                            <PictureIcon color={colors.palette.primary} />
                        </View>

                        <Button
                            title="Gallery / Camera"
                            variant='outline'
                            onPress={() => setIsOpen(true)}
                            className='w-[47%] border border-[#1B4C60] bg-white'
                            classNameText='text-[#1B4C60]'
                            fontVariant='light'
                        />

                        <Text textClassName="mt-3 text-neutral-400 text-center">Max size 2 MB</Text>
                    </>
                )}
            </View>

            {error && (
                <Text textClassName="text-sm italic text-[#DF0000]">
                    {error?.message?.toString()}
                </Text>
            )}

            <Modal
                animationType="fade"
                transparent
                visible={isOpen}
                onRequestClose={() => setIsOpen(false)}
            >
                <View
                    className='absolute bottom-0 top-0 justify-center w-full'
                    style={{
                        backgroundColor: 'rgba(30, 30, 30, 0.4)'
                    }}
                >
                    <View className='bg-white py-5 mx-5 px-5 rounded-xl'>
                        <View className='flex-row items-center justify-between mb-5'>
                            <Text variant='medium' textClassName='text-xl'>{label}</Text>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setIsOpen(false)
                                }}
                            >
                                <XIcon color="#A7A9B3" />
                            </TouchableOpacity>
                        </View>

                        <Button
                            title="Gallery"
                            variant='outline'
                            onPress={onGallery}
                            className='w-full border border-[#1B4C60] bg-white mb-3'
                            classNameText='text-[#1B4C60]'
                            fontVariant='light'
                        />

                        <Button
                            title="Camera"
                            variant='outline'
                            onPress={onCamera}
                            className='w-full border border-[#1B4C60] bg-white'
                            classNameText='text-[#1B4C60]'
                            fontVariant='light'
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}