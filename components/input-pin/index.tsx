import React, { useEffect, useRef } from 'react'
import { Text, View } from "react-native"
//@ts-ignore
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import { colors } from 'themes'
import { TProps } from './type';
import { Controller, get, useFormContext } from 'react-hook-form';

export const InputPin = <TFormValues extends Record<string, unknown>>(
    props: TProps<TFormValues>
) => {
    const {
        label,
        name,
        timer,
        setTimer
    } = props

    const codeRef = useRef<any>()

    const {
        control,
        formState: { errors },
        watch
    } = useFormContext()

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)
        if(timer == 0){
            clearInterval(interval)
            codeRef.current?.blur()
        }
        return () => clearInterval(interval)
    }, [timer])

    const pin = watch(name)

    const error = get(errors, name)

    return (
        <View className='mb-5'>
            <Text
                className={`mb-2 text-md font-medium text-[#848484]`}
            >
                {label}
            </Text>

            <View className='mt-5 items-center'>
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <SmoothPinCodeInput
                            ref={codeRef}
                            cellStyle={{
                                borderBottomWidth: 2,
                                borderColor: colors.palette.neutral40,
                            }}
                            cellStyleFocused={{
                                borderColor: colors.palette.primary,
                            }}
                            value={pin}
                            onTextChange={field.onChange}
                            codeLength={6}
                            cellSize={35}
                            cellSpacing={20}
                            autoFocus
                            onFulfill={(code: any) => {
                                if (code.length == 5) {
                                    codeRef.current?.blur()
                                }
                            }}

                        />
                    )}
                />
            </View>

            {error && (
                <Text className="text-sm italic text-[#DF0000]">
                    {error?.message?.toString()}
                </Text>
            )}
        </View>
    )
}