import React from "react"

export type TProps = {
    title: string,
    variant: 'default' | 'primary'
    onBack: () => void,
    rightComponent?: React.ReactElement
}