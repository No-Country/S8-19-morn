import { useState } from "react";
import styles from "../../scss/globals.module.scss";
const {loginModal, modalContent, closeButton} = styles

export default function LoginModal({open, handleClose}){
    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })
    const handleChangeInput = (evt, value) => {
        setFormFields({...formFields, [value]: evt.target.value})
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formFields)
        // const url = 'http://localhost:3001/login'
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formFields)
        // })
    }
    return(
        <dialog open={open} onClose={handleClose} className={loginModal}>
            <form className={modalContent} onSubmit={handleSubmit}>
                <h3>DAILY MANAGER</h3>
                <button className={closeButton} onClick={handleClose} type="button">X</button>
                <input type="text" placeholder="Email..." value={formFields.email} onChange={(evt) => {handleChangeInput(evt, 'email')}}/>
                <input type="password" placeholder="Contraseña..." value={formFields.password} onChange={(evt) => {handleChangeInput(evt, 'password')}}/>
                <button type="submit">
                    Iniciar Sesión
                </button>
                <p>¿No tienes una cuenta? Registrate.</p>
                <button type="submit">
                    Registrarse
                </button>
            </form>
        </dialog>
    )
}