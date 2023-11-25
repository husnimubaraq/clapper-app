export type TProps = {
    submitText?: string
    onSubmit: () => void
    submitVariant?: 'primary' | 'secondary' | 'error' | 'outline' | 'success'
    cancelText?: string
    onCancel?: () => void
    cancelVariant?: 'primary' | 'secondary' | 'error' | 'outline' | 'success'
    loading?: boolean
}
