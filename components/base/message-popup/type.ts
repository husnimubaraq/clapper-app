import { Dispatch } from "react"

export type TProps = {
    isOpen: boolean
    type: 'success' | 'error' | 'warning'
    title: string
    subtitle?: string
    message?: string
    onSubmit?: () => void
    onCancel?: Dispatch<React.SetStateAction<boolean>>,
}