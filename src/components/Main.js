import React, { useEffect, useRef } from "react";
import "./Main.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Banner from "./Banner";
gsap.registerPlugin(TextPlugin);

function Main() {
  const helloRef = useRef();
  const txtRef = useRef(null);

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
        <div className="nameInverted">
          <p>Pedro Henrique Lima</p>
        </div>
        <div className="frontDev">
          <h1 ref={helloRef}>{}</h1>
        </div>
      </section>
      <section className="aboutContainer">
        <div className="textContainer" ref={txtRef}>
          <p>Que bom que chegou aqui!</p>
          <div className="line"></div>
          <h3>
            Como pode ver aqui na esquerda, meu nome é Pedro. estudo frontend e
            tudo relacionado à web há um tempo já e venho desenvolvendo projetos
            na área para pequenos e médios negócios aqui no interior de sp,
            rodando pra baixo você pode conferir alguns deles.
          </h3>
        </div>
        <img src="img/avatar.jpg" className="me" alt="me"></img>
      </section>
    </>
  );
}

export default Main;
