import { MessagePopup } from 'components/base'
import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from 'react'

type PopUpContextValue = {
    showPopUp: (title: string, subTitle: string, message: string, variant: "success" | "error") => void
}

const PopUpContext = createContext<PopUpContextValue | undefined>(
    undefined
)

const PopUpProvider = (props: PropsWithChildren) => {
    const { children } = props


    const [type, setType] = useState<'success' | 'error' | 'warning'>('success');

    const [title, setTtile] = useState('');
    const [subTitle, setSubtitle] = useState('');
    const [message, setMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const showPopUp = (title: string, subTitle: string, message: string, variant: 'success' | 'error' | 'warning') => {
        setType(variant);
        setMessage(message);
        setSubtitle(subTitle)
        setTtile(title);
        setIsOpen(true);
    };

    const value = {
        showPopUp
    }

    return (
        <PopUpContext.Provider 
            value={value}
        >
            {children}

            {isOpen && (
                <MessagePopup
                    type={type}
                    title={title}
                    subtitle={subTitle}
                    message={message}
                    isOpen={isOpen}
                    onCancel={setIsOpen}
                />
            )}
        </PopUpContext.Provider>
    )
}

const usePopUpContext = () => {
    const context = useContext(PopUpContext)
    if (context === undefined) {
        throw new Error(
            'usePopUpContext must be used within a PopUpProvider'
        )
    }
    return context
}

export { PopUpProvider, usePopUpContext }
