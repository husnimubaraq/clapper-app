import { TouchableOpacity } from 'react-native'
import React, { PropsWithChildren  } from 'react'

import { variants } from './data'
import { TProps } from './type'
import { twMerge } from 'tailwind-merge'
import { Text } from 'components/base'

export const Button = (props: PropsWithChildren<TProps>) => {
    const { 
        title, 
        children, 
        className, 
        classNameText, 
        onPress,
        variant = 'primary',
        style,
        disabled
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
                <Text
                    textClassName={`text-lg text-white ${classNameText}`}
                    variant="medium"
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}