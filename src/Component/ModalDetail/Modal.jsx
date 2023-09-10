import React from 'react'
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';


export default function Modal({ children, closeModal, isOpen, selectedProject}) {
    Modal.propTypes = {
        selectedProject:PropTypes.array.isRequired,
        children: PropTypes.node.isRequired,
        closeModal : PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    };
    
    const animationClass = isOpen ? styles.fadeIn : styles.fadeOut;

    return (
        <div className={`${styles.modalContainer} ${animationClass}`}>
            <div className={styles.modalView}>
                <header className={styles.modalHeader}>
                    <div>
                    <h3>{selectedProject.title}</h3>
                    </div>
                    <div>
                        <button onClick={closeModal } className={styles.closeButton}>Cerrar</button>
                    </div>
                </header>
                <div className={styles.modalContent}>{children}</div>
            </div>
        </div>
    )
}