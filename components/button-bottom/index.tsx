import React from 'react'
import { TextInput, View } from "react-native"

import { TProps } from './type'
import { twMerge } from 'tailwind-merge'
import { Button } from 'components/base'

export const ButtonBottom = (props: TProps) => {
    const {
        submitText = 'Submit',
        submitVariant = 'primary',
        onSubmit,
        cancelText,
        cancelVariant = 'outline',
        onCancel,
        loading
    } = props

    return (
        <View
            className={twMerge(
                ' bottom-0 absolute left-0 right-0 bg-white'
            )}
            style={{
                zIndex: 100
            }}
        >
            <View className='flex-row justify-between px-5 border-t border-neutral-300 py-5 bg-white'>
                {cancelText && (
                    <Button
                        title={cancelText}
                        variant={cancelVariant}
                        onPress={onCancel}
                        className='w-[47%] border border-[#1B4C60]'
                        classNameText='text-[#1B4C60]'
                        fontVariant='light'
                    />
                )}

                <Button
                    title={submitText}
                    variant={submitVariant}
                    onPress={onSubmit}
                    className={cancelText ? 'w-[47%]' : 'w-full'}
                    fontVariant='light'
                    loading={loading}
                />
            </View>
        </View>
    )
}