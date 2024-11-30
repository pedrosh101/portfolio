import React from "react";
import close from "../svg/close.svg";

function Modal({ open, onClose }) {


  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalTop">
          <img src={close} alt="x" onClick={onClose} className="closeBtn" />
          <div className="contentModal">
            <h3>Web Development</h3>
            <p>
              HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, NEXT, TAILWIND,
              BOOTSTRAP & WORDPRESS
            </p>
            <h2>Web Design</h2>
            <p>PHOTOSHOP, ILLUSTRATOR, FIGMA, CANVA & DAVINCI RESOLVE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
