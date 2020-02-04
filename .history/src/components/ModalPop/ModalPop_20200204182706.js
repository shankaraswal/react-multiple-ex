import React, { useState } from 'react';
import Modal from 'react-modal';

import './ModalPop.css';

function ModalPop({name}) {
  const [modalIsOpen, setOpenModal] = useState(false);
  return (
    <div className="App" >
      <button className="btn-success" onClick={() => setOpenModal(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <h1>{name}</h1>
        <hr />
        <button className="btn btn-warning" onClick={() => setOpenModal(false)}>Close Modal</button>

      </Modal>
      
    </div>
  );
}

export default ModalPop;
