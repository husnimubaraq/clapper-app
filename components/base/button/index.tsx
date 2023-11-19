import { ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren  } from 'react'

import { variants } from './data'
import { TProps } from './type'
import { twMerge } from 'tailwind-merge'
import { Text } from 'components/base'
import { colors } from 'themes'

export const Button = (props: PropsWithChildren<TProps>) => {
    const { 
        title, 
        children, 
        className, 
        classNameText, 
        onPress,
        variant = 'primary',
        fontVariant = 'medium',
        style,
        disabled,
        loading
    } = props

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className={twMerge(
                ` h-12 items-center justify-center rounded-md px-4 py-2  ${variants[variant]} ${className}`,
                disabled && variants['disabled']
            )}
            style={style}
        >
            {children ? children : (
                loading ? (
                    <ActivityIndicator size='small' color={colors.background} />
                ) : (
                    <Text 
                        variant={fontVariant}
                        textClassName={`text-lg font-semibold text-white ${classNameText}`}
                    >
                        {title}
                    </Text>
                )
            )}
        </TouchableOpacity>
    )
}