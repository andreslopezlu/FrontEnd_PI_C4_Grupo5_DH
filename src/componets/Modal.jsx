import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img
          className="close-button"
          src="../../public/imagenes/salir.png"
          alt="Cerrar"
          onClick={onClose}
        />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
