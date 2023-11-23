import { ReactNode } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { KeyboardTypeOptions } from 'react-native'

export type TProps<TFormValues extends FieldValues> = {
  id?: string
  name: Path<TFormValues>
  label?: string
  type?: string
  placeholder?: string
  className?: string
  labelClassName?: string
  inputClassName?: string
  inputContainerClassName?: string
  containerClassName?: string
  leftNodeClassName?: string
  rightNodeClassName?: string
  placeholderTextColor?: string
  keyboardType?: KeyboardTypeOptions
  rules?: RegisterOptions
  disabled?: boolean
  hint?: string
  rightNode?: ReactNode
  leftNode?: ReactNode
  onPress?: () => void
  secureTextEntry?: boolean
}
