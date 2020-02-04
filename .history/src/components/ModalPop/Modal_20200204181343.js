import React, { useState } from 'react';
import './Modal.css';
import Modal from 'react-modal';
import Hello from '../../components/Static/Hello';

function ModalPop({name}) {
  const [modalIsOpen, setOpenModal] = useState(false);
  return (
    <div className="App" >
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <h1>{name}</h1>
        <Hello />
        <hr />
        <button onClick={() => setOpenModal(false)}>Close Modal</button>

      </Modal>
      
    </div>
  );
}

export default ModalPop;
