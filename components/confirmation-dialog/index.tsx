import { View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { TProps } from './type'
import { Button, Text } from 'components/base'
import { twMerge } from 'tailwind-merge'

export const ConfirmationDialog = (props: TProps) => {
    const { 
        isOpen, 
        title, 
        subtitle, 
        message, 
        onCancel, 
        onSubmit,
        submitText = 'Oke',
        cancelText,
        isLoading
    } = props

    return (
        <Modal 
            animationType="fade" 
            transparent 
            visible={isOpen}
            onRequestClose={() => onCancel && onCancel(false)}
            onDismiss={() => onCancel && onCancel(false)}
        >
            <TouchableOpacity 
                activeOpacity={1}
                onPress={() => onCancel && onCancel(false)}
                className='absolute bottom-0 top-0 justify-center w-full'
                style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.4)'
                }}
            >
                <View className='bg-white py-5 mx-5 rounded-md'>

                    <Text textClassName='text-xl text-center' variant='medium'>{title}</Text>

                    <Text textClassName='text-center mt-3 mb-5'>{message}</Text>

                    <View className={twMerge(
                        'flex-row items-center mt-4 px-5',
                        cancelText ? 'justify-between' : 'justify-center'
                    )}>
                        {cancelText && (
                            <Button
                                title={cancelText}
                                variant="outline"
                                onPress={() => {
                                    onCancel && onCancel(false)
                                }}
                                className='w-[47%] border border-[#1B4C60]'
                                classNameText='text-[#1B4C60]'
                                fontVariant='light'
                            />
                        )}

                        <Button
                            onPress={() => {
                                onSubmit ? onSubmit() : onCancel && onCancel(false)
                            }}
                            title={submitText}
                            className='w-[47%]'
                            fontVariant='light'
                            loading={isLoading}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}