import { Dispatch } from "react"

export type TProps = {
    isOpen: boolean
    onCancel?: Dispatch<React.SetStateAction<boolean>>,
}