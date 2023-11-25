import { View, Modal,  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TProps } from './type'
import { Button, Text } from 'components/base'
import { VH } from 'utils';
import { colors } from 'themes';
import { Controller, get, useFormContext } from 'react-hook-form';
import { dateFormatter } from 'utils';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';
import { SelectList } from 'react-native-dropdown-select-list'


export const Select = <TFormValues extends Record<string, unknown>>(
    props: TProps<TFormValues>
) => {
    const {
        data,
        label,
        className,
        name,
        onChange
    } = props

    const {
        control,
        formState: { errors },
        watch
    } = useFormContext()

    const selected = watch(name) as Record<string, string>

    const error = get(errors, name)

    return (
        <>
            <View className='mb-5 h-20'>
                {label && (
                    <Text
                        textClassName="mb-2 text-md font-medium text-[#FFF]"
                    >
                        {label}
                    </Text>
                )}

                <View
                    className={twMerge(
                        // 'bg-white rounded-md',
                        className
                    )}
                >
                    <Controller
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <SelectList
                                data={data}
                                placeholder={"Pilih"}
                                save='key'
                                setSelected={(value: string) => {
                                    let find = data.find((x) => x?.key === value)
                                    field.onChange(find)
                                    onChange && onChange(find)
                                }}
                                defaultOption={selected ? selected as any : undefined}
                                fontFamily='Montserrat-Regular'
                                search={false}
                                searchPlaceholder="Pilih"
                                dropdownStyles={{
                                    backgroundColor: colors.background,
                                    zIndex: 1000
                                }}
                                boxStyles={{
                                    borderRadius: 5,
                                    paddingHorizontal: 15,
                                    backgroundColor: colors.background,
                                }}
                                inputStyles={{
                                    fontFamily: 'Montserrat-Regular'
                                }}
                            />
                        )}
                    />
                </View>

                {error && (
                    <Text textClassName="text-sm italic text-[#DF0000]">
                        {error?.message?.toString()}
                    </Text>
                )}
            </View>
        </>
    )
}