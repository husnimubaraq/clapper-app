import { Dispatch } from "react"
import { FieldValues, Path } from 'react-hook-form'

export type TProps<TFormValues extends FieldValues> = {
    id?: string
    name: Path<TFormValues>
    label?: string
    className?: string
    minDate?: string
    disabled?: boolean
}