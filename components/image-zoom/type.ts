import { Dispatch } from "react"

export type TProps = {
    url?: any
    isOpen: boolean
    onCancel?: Dispatch<React.SetStateAction<boolean>>
}