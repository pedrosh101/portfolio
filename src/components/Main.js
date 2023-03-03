import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { TextPlugin } from "gsap/TextPlugin";
import Banner from "./Banner";
import Language from "./Language";
import Modal from "./Modal";
gsap.registerPlugin(TextPlugin);

function Main() {
  const [openModal, setOpenModal] = useState(false);
  const helloRef = useRef();
  const txtRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const reference = txtRef.current;

    gsap.fromTo(
      reference,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        scrollTrigger: { trigger: reference },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".me",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        scrollTrigger: { trigger: txtRef.current },
      }
    );
  }, []);

  useEffect(() => {
    const text = helloRef.current;

    gsap.to(text, {
      text: {
        value: "desenvolvedor<br/> frontend",
        delimiter: "",
      },
      ease: "power1.in",
      duration: 5,
    });
  }, []);

  return (
    <>
      <Banner />
      <section className="frontContainer">
        <p className="nameInverted">Pedro Henrique Lima</p>
        <Language />
        <div className="frontDev">
          <h1 ref={helloRef}>{}</h1>
        </div>
        <div className="aboutContainerPhone">
          <div className="textContainer" ref={txtRef}>
            <p>{t("main_title")}</p>
            <div className="line"></div>
            <h3>{t("main_quote")}</h3>
            <h4 className="modalBtn" onClick={() => setOpenModal(true)}>
              Link
            </h4>
          </div>
        </div>
      </section>
      <div className="aboutContainerDesk">
        <div className="textContainer" ref={txtRef}>
          <p>{t("main_title")}</p>
          <div className="line"></div>
          <h3>{t("main_quote")}</h3>
          <h4 className="modalBtn" onClick={() => setOpenModal(true)}>
            Link
          </h4>
        </div>
        <img src="img/avatar.jpg" className="me" alt="me" />
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default Main;
