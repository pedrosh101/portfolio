import React from "react";
import { useTranslation } from "react-i18next";
import close from "../svg/close.svg"


function Modal({ open, onClose }) {

  const { t } = useTranslation();

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
              <h2>{t("modal1")}</h2>
              <p>{t("modal2")}</p>
              <h3>web development</h3>
              <p>HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, BOOTSTRAP</p>
              <h3>web design</h3>
              <p>PHOTOSHOP, FIGMA</p>
          </div>
        </div>
        {/* <img src="img/avatar.jpg" className="me" alt="me" /> */}
      </div>
    </div>
  );
}

export default Modal;
