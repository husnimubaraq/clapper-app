import { Toast } from 'components/base'
import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from 'react'

type ToastContextValue = {
    showToast: (message: string, variant: "success" | "error") => void
}

const ToastContext = createContext<ToastContextValue | undefined>(
    undefined
)

const ToastProvider = (props: PropsWithChildren) => {
    const { children } = props


    const [type, setType] = useState<'success' | 'error'>('success');

    const [message, setMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const showToast = (message: string, variant: 'success' | 'error') => {
        setType(variant);
        setMessage(message);
        setIsOpen(true);

        setTimeout(() => {
            setIsOpen(false);
            setMessage('');
        }, 3000);
    };

    const value = {
        showToast
    }

    return (
        <ToastContext.Provider 
            value={value}
        >
            {children}

            {isOpen && (
                <Toast
                    type={type}
                    message={message}
                />
            )}
        </ToastContext.Provider>
    )
}

const useToastContext = () => {
    const context = useContext(ToastContext)
    if (context === undefined) {
        throw new Error(
            'useToastContext must be used within a PaginationProvider'
        )
    }
    return context
}

export { ToastProvider, useToastContext }
