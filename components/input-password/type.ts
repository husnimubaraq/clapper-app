import { ReactNode } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { KeyboardTypeOptions } from 'react-native'

export type TProps<TFormValues extends FieldValues> = {
  id?: string
  name: Path<TFormValues>
  label?: string
}
