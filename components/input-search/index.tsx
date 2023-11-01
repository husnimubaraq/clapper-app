import React from 'react'
import { TextInput, View } from "react-native"

import { SearchIcon } from 'components/icons'
import { colors } from 'themes'

export const InputSearch = (props: any) => {

    return (
        <View className='flex-row items-center bg-white border border-neutral-600 rounded-md px-3 py-2'>
            <SearchIcon color={colors.palette.neutral60} />

            <TextInput
                className='flex-1 ml-2'
                placeholder='Cari'
                selectionColor={colors.palette.primary}
                placeholderTextColor={colors.palette.neutral60}
                {...props}
            />
        </View>
    )
}