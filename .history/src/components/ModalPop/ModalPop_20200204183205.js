import React, { useState } from 'react';
import Modal from 'react-modal';
import CopyArea from '../../components/common/CopyArea'

import './ModalPop.css';

function ModalPop({name}) {
  const [modalIsOpen, setOpenModal] = useState(false);
  return (
    <div className="" >
      <button className="btn btn-info" onClick={() => setOpenModal(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <h1>Modal is open</h1>
        <CopyArea />
        <button className="btn btn-danger float-right" onClick={() => setOpenModal(false)}>Close Modal</button>
      </Modal>
      
    </div>
  );
}

export default ModalPop;
