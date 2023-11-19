import { useId } from 'react'
import { useFormContext, get, Controller } from 'react-hook-form'
import { TProps } from './type'
import { TextInput, View } from 'react-native'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Text } from 'components/base'

export const Input = <TFormValues extends Record<string, unknown>>(
    props: TProps<TFormValues>
) => {
    const {
        id,
        label,
        className,
        name,
        hint,
        labelClassName,
        inputClassName,
        containerClassName,
        leftNodeClassName,
        rightNodeClassName,
        rightNode,
        leftNode,
        ...rest
    } = props

    const generatedId = useId()

    const {
        control,
        formState: { errors },
    } = useFormContext()

    const error = get(errors, name)

    return (
        <View className={twMerge(
            'h-20',
            containerClassName
        )}>
            {label && (
                <Text
                    textClassName={twMerge(
                        'mb-2 text-md font-medium text-[#848484]',
                        labelClassName
                    )}
                >
                    {label}
                </Text>
            )}

            <View
                className={twMerge(
                    'h-12 flex-row bg-white items-center rounded-md',
                    className,
                )}
            >
                {leftNode && (
                    <View
                        className={twMerge(
                            'h-full pl-4 py-3',
                            leftNodeClassName
                        )}
                    >
                        {leftNode}
                    </View>
                )}

                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <TextInput
                            id={id ?? generatedId}
                            className={twMerge(
                                'border-0 px-4 py-3 text-md text-black flex-1',
                                inputClassName
                            )}
                            style={{
                                fontFamily: 'Montserrat-Regular'
                            }}
                            onChangeText={field.onChange}
                            autoCapitalize='none'
                            {...rest}
                        />
                    )}
                />

                {rightNode && (
                    <View
                        className={twMerge(
                            'h-full px-4 py-3',
                            rightNodeClassName
                        )}
                    >
                        {rightNode}
                    </View>
                )}
            </View>

            {hint && <Text variant='medium' textClassName="text-sm text-[#DF0000]">{hint}</Text>}
            {error && (
                <Text variant='medium' textClassName="text-sm text-[#DF0000]">
                    {error?.message?.toString()}
                </Text>
            )}
        </View>
    )
}
