import { ViewStyle } from "react-native"

export type TProps = {
  variant?: 'primary' | 'secondary' | 'error' | 'outline' | 'success'
  fontVariant?: 'normal' | 'medium' | 'semibold' | 'bold' | 'light'
  title?: string
  className?: string
  classNameText?: string,
  onPress?: () => void,
  style?: ViewStyle
  disabled?: boolean
  loading?: boolean
}

