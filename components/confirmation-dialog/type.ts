import { Dispatch } from "react"

export type TProps = {
    isOpen: boolean
    title: string
    subtitle?: string
    message?: string
    onSubmit?: () => void
    onCancel?: Dispatch<React.SetStateAction<boolean>>
    submitText?: string
    cancelText?: string
    isLoading?: boolean
}