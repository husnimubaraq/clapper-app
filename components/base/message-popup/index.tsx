import { View, Modal, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TProps } from './type'
import { status } from './data'
import { Button } from 'components/base'
import { XIcon } from 'components/icons'
import { colors } from 'themes'

export const MessagePopup = (props: TProps) => {
    const { isOpen, title, subtitle, message, onCancel, onSubmit } = props

    return (
        <Modal 
            animationType="fade" 
            transparent 
            visible={isOpen}
            onRequestClose={() => onCancel && onCancel(false)}
            onDismiss={() => onCancel && onCancel(false)}
        >
            <View 
                className='absolute bottom-0 top-0 justify-center w-full'
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)'
                }}
            >
                <View className='bg-[#1B4C60] mx-[10%] rounded-xl pb-16'>
                    <View className='flex-row items-center justify-between py-3 px-4 border-b border-white'>
                        <View/>
                        <Text className='text-xl text-center font-[700] text-white'>{title}</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                onCancel && onCancel(false)
                            }}
                        >
                            <XIcon color={colors.background} />
                        </TouchableOpacity>
                    </View>

                    <Text className='mt-5 text-white mx-4'>{message}</Text>
                </View>
            </View>
        </Modal>
    )
}
