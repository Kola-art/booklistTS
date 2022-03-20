import React, {FC} from 'react';
import '../../styles/modal.css'

interface ModalProps {
    modal: boolean;
    setModal: (arg: boolean) => void
};

const Modal: FC<ModalProps> = ({ modal, setModal }) => {
  let modalClass: string[] = ['modal'];

  const showModal = () => {
    modalClass.push('show'); 
    setTimeout(() => {
      modalClass.pop();
      setModal(false)
    },2000);
  }

  if(modal) {
    showModal();
  }
    
  return (
    <div className={modalClass.join(' ')}>
      <span>Succes!</span>
    </div>
  )
}
export default Modal;