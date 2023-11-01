import { useEffect, useState } from "react"
import { Keyboard } from "react-native"

type Props = {
    currentUrl: string
}

export function useKeyboard(props: Props){
    const { currentUrl } = props

    const [isContact, setIsContact] = useState(false)
    const [isKeyboardContact, setIsKeyboardContact] = useState(false)
    const [isSwitchKeyboard, setIsSwitchKeyboard] = useState(false)
    const [keyboardType, setKeyboardType] = useState('')
    const [isNumberInput, setIsNumberInput] = useState(false)

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
            const topUp = currentUrl.match(/top-up/g);
            const pembeliaPulsa = currentUrl.match(/pembelian-pulsa/g);
            const tiketPesawat = currentUrl.match(/tiket-pesawat/g);
            const tiketKereta = currentUrl.match(/tiket-kereta/g);
            const tiketPelni = currentUrl.match(/tiket-pelni/g);
            const tiketTravel = currentUrl.match(/tiket-travel/g);
            const hotel = currentUrl.match(/search-voucher-hotel-v5/g);
            const pln = currentUrl.match(/ppob-pln-postpaid/g);
            const telkom = currentUrl.match(/ppob-telkom/g);
            const bpjsks = currentUrl.match(/ppob-bpjsks/g);
            const pdam = currentUrl.match(/ppob-pdam/g);
            const pgn = currentUrl.match(/ppob-pgn/g);
            const pbb = currentUrl.match(/ppob-pbb-all/g);
            const tv = currentUrl.match(/ppob-tv-berlangganan/g);
            const samolnas = currentUrl.match(/ppob-tv-samolnas/g);

            if(
                topUp || pembeliaPulsa || tiketPesawat || tiketKereta || tiketPelni || tiketTravel ||
                hotel || pln || telkom || bpjsks || pdam || pgn || pbb || tv || samolnas
            ){
                if(isNumberInput){
                    setIsContact(true)
                    setIsKeyboardContact(true)
                }
            }
        })

        const keyboardHidelisteener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardContact(false)
            setIsContact(false)
            setIsSwitchKeyboard(false)
        })

        return () => {
            keyboardShowListener.remove()
            keyboardHidelisteener.remove()
        }
    }, [currentUrl, isNumberInput])

    return {
        isContact,
        isKeyboardContact,
        isSwitchKeyboard,
        keyboardType,
        isNumberInput,
        setIsContact,
        setIsKeyboardContact,
        setIsSwitchKeyboard,
        setKeyboardType,
        setIsNumberInput
    }
}