import { View, Modal, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TProps } from './type'
import { Button } from 'components/base'
import DateTimePicker from '@react-native-community/datetimepicker';
import { VH } from 'utils';
import { colors } from 'themes';
import { Controller, get, useFormContext } from 'react-hook-form';
import { dateFormatter } from 'utils';
import dayjs from 'dayjs';

export const DatePickerWheel = <TFormValues extends Record<string, unknown>>(
    props: TProps<TFormValues>
) => {
    const { label, name } = props

    const [isOpen, setIsOpen] = useState(false)

    const {
        control,
        formState: { errors },
        watch
    } = useFormContext()

    const birthDate = watch('birth_date')

    const error = get(errors, name)

    return (
        <>
            <View className='mb-5 h-20'>
                {label && (
                    <Text
                        className="mb-2 text-md font-medium text-[#848484]"
                    >
                        {label}
                    </Text>
                )}

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setIsOpen(true)}
                    className='h-12 items-center rounded-[5px] px-5 flex-row border border-[#848484]'
                >
                    <Text className='text-md'>
                        {
                            birthDate ? dayjs(birthDate).format('YYYY-MM-DD') : ''
                        }
                    </Text>
                </TouchableOpacity>

                {error && (
                    <Text className="text-sm italic text-[#DF0000]">
                        {error?.message?.toString()}
                    </Text>
                )}
            </View>
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
                    <Controller
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <DateTimePicker
                                value={birthDate ? new Date(birthDate) : new Date()}
                                mode='date'
                                onChange={(_, date) => {
                                    field.onChange(dayjs(date).format('YYYY-MM-DD'))
                                    setIsOpen(false)
                                }}
                                maximumDate={new Date()}
                                minimumDate={new Date("1970-01-01")}
                            />
                        )}
                    />
                </View>
            </Modal>
        </>
    )
}
