import { MouseEvent } from 'react';
import { ModalType } from '../../Types.type';
import css from './ImageModal.module.css'
import Modal from 'react-modal';

export default function ImageModal({ fullImg, closeModal, isOpen, alt }: ModalType) {
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).tagName === e.currentTarget.tagName) {
            closeModal();
        }
    }

    return (
        <div onClick={handleClick}>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={css.modal}
            >
            
                <img src={fullImg} className={css.img} alt={alt} />
            
            </Modal>
        </div>
    )
}