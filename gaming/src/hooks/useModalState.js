import { useState } from "react"

export default function useModalState() {
    const [registerModalState, setRegisterModalState] = useState(false);
    const [loginModalState, setLoginModalState] = useState(false);

    const openRegisterModal = () => {
        setRegisterModalState(true);
    }

    const closeRegisterModal = () => {
        setRegisterModalState(false);
    }

    const openLoginModal = () => {
        setLoginModalState(true);
    }

    const closeLoginModal = () => {
        setLoginModalState(false)
    }


    return {
        openRegisterModal,
        closeRegisterModal,
        openLoginModal,
        closeLoginModal,
        registerModalState,
        loginModalState
    }

}