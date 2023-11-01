import { View, Modal, Text } from 'react-native'
import React from 'react'
import { TProps } from './type'
import { status } from './data'
import { Button } from 'components/base'

export const MessagePopup = (props: TProps) => {
    const { type, isOpen, title, subtitle, message, onCancel, onSubmit } = props

    return (
        <Modal animationType="fade" transparent visible={isOpen}>
            <View 
                className='absolute bottom-0 top-0 justify-center w-full'
                style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.4)'
                }}
            >
                <View className='bg-white py-5 mx-5 rounded-md'>
                    <View className='items-center mb-3'>
                        {status[type]}
                    </View>

                    <Text className='text-xl text-center font-[700]'>{title}</Text>
                    
                    <Text className='text-md text-center'>{subtitle}</Text>

                    <Text className='text-center mt-5'>{message}</Text>

                    <View className='flex-row items-center justify-center mt-4'>
                        <Button
                            onPress={() => {
                                onSubmit ? onSubmit() : onCancel && onCancel(false)
                            }}
                            title='Ok'
                            style={{
                                width: 100
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
