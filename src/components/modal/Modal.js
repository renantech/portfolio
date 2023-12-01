import { FaCopy } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import styles from './Modal.module.css';

function Modal({ closeModal }) {
    function copyContact() {
        const contact = document.getElementById('emailContact').value;
        navigator.clipboard.writeText(contact).then(() => alert('Copiado com sucesso!'));
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <IoMdClose onClick={closeModal} />
                <div className={styles.contact}>
                    <input id="emailContact" type="email" value="renanmendes421@icloud.com" disabled />
                    <button onClick={copyContact}><FaCopy /></button>
                </div>
            </div>
        </div>
    );
}

export default Modal;