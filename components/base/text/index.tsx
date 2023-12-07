import { Text as TextCustom, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

import { TProps } from './type'
import { variants } from './data'
import { twMerge } from 'tailwind-merge'

export const Text = (props: PropsWithChildren<TProps>) => {
    const { variant = 'normal', children, className, textClassName, color, numberOfLines } = props

    return (
        <TextCustom
            style={[
                {
                    fontFamily: variants[variant]
                },
                color ? {
                    color: color
                } : {}
            ]}
            className={twMerge(
                className,
                textClassName
            )}
            numberOfLines={numberOfLines}
        >
            {children}
        </TextCustom>
    )
}