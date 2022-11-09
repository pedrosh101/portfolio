import React from "react";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) =>{e.stopPropagation()}} className="modalContainer">
        <div className="modalTop">
          <p onClick={onClose} className="closeBtn">X</p>
          <div className="contentModal">
            <p>HTML, CSS, JAVASCRIPT</p>
            <p>olha la</p>
          </div>
        </div>
        {/* <img src="img/avatar.jpg" className="me" alt="me" /> */}
      </div>
    </div>
  );
}

export default Modal;
