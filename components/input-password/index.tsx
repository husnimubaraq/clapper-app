import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from "react-native"

import { EyeIcon, EyeOffIcon, SearchIcon } from 'components/icons'
import { colors } from 'themes'
import { Input } from 'components/base'
import { TProps } from './type'

export const InputPassword = <TFormValues extends Record<string, unknown>>(
    props: TProps<TFormValues>
) => {

    const { name, label } = props

    const [showPassword, setShowPassword] = useState(false)

    return (
        <Input
            label={label}
            name={name}
            placeholder='Input password'
            containerClassName="mb-5"
            inputClassName="text-black"
            secureTextEntry={!showPassword}
            rightNode={
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <EyeIcon color="#848484" width={17} height={15}/>
                    ) : (
                        <EyeOffIcon color="#848484" width={17} height={15}/>
                    )}
                </TouchableOpacity>
            }
        />
    )
}