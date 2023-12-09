import { View, Modal, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { TProps } from './type'
import { Button, Text } from 'components/base'
import { XIcon } from 'components/icons'
import * as ImagePicker from 'expo-image-picker';
import { useToastContext } from 'contexts'
import { useMutation } from 'react-query'
import { TUpdatePhotoProfileRequest, updatePhotoProfileRequest } from 'features/auth'
import { useAuthStore } from 'stores'
import { colors } from 'themes'
import { useInvalidateQuery } from 'hooks'

export const UploadPopup = (props: TProps) => {
    const {isOpen, onCancel } = props

    const { showToast } = useToastContext()

    const invalidate = useInvalidateQuery('profile')

    const token = useAuthStore((state: any) => state.token)

    const { mutate, isLoading } = useMutation({
        mutationFn: (params: TUpdatePhotoProfileRequest) => updatePhotoProfileRequest(params),
        onSuccess: async (data) => {
            invalidate()
            showToast(data.pesan, 'success')
            onCancel && onCancel(false)
        },
        onError: (error: any) => {
            showToast(error.pesan, 'error')
        }

    })

    const onGallery = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.canceled) {
            mutate({
                token,
                photo: result?.assets[0]?.uri
            })
        }
    }

    const onCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        if (!result.canceled) {
            mutate({
                token,
                photo: result?.assets[0]?.uri
            })
        }
    }

    return (
        <Modal
                animationType="fade"
                transparent
                visible={isOpen}
                onRequestClose={() => onCancel && onCancel(false)}
            >
                <View
                    className='absolute bottom-0 top-0 justify-center w-full'
                    style={{
                        backgroundColor: 'rgba(30, 30, 30, 0.4)'
                    }}
                >
                    <View className='bg-white py-5 mx-5 px-5 rounded-xl'>
                        <View className='flex-row items-center justify-between mb-5'>
                            <Text variant='medium' textClassName='text-xl'>Ubah Foto Profil</Text>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    onCancel && onCancel(false)
                                }}
                            >
                                <XIcon color="#A7A9B3" />
                            </TouchableOpacity>
                        </View>

                        {isLoading ? (
                            <View className='items-center mt-4'>
                                <ActivityIndicator size='large' color={colors.palette.primary} />
                            </View>
                        ) : (
                            <>
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
                            </>
                        )}
                    </View>
                </View>
            </Modal>
    )
}
