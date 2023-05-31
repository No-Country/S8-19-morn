import styles from "../../scss/globals.module.scss";
const {loginModal, modalContent, closeButton} = styles
export default function LoginModal({open, handleClose}){
    return(
        <dialog open={open} onClose={handleClose} className={loginModal}>
            <form className={modalContent}>
                <h3>DAILY MANAGER</h3>
                <button className={closeButton} onClick={handleClose} type="button">X</button>
                <input type="text"/>
                <input type="password"/>
                <button type="submit">
                    Iniciar Sesión
                </button>
            </form>
        </dialog>
    )
}