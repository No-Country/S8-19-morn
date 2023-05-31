import { useState } from "react";
import LoginModal from "./LoginModal";
import styles from "../../scss/globals.module.scss";
const {loginButton} = styles

export default function Login(){
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(!openModal)
    }
    console.log(openModal)
    return(
        <>
        <button className={loginButton} onClick={handleModal}>
            Iniciar Sesión
        </button>
        {openModal && <LoginModal open={openModal} handleClose={handleModal}/>}
        </>
    )
}