import "./About.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function About() {
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

  return (
    <>
      <section className="about">
        <div className="text" ref={txtRef}>
          <p>Que bom que chegou aqui!</p>
          <div className="line"></div>
          <h3>
            Como pode ver aqui na esquerda, meu nome é Pedro. estudo frontend e
            tudo relacionado a web há um tempo já e venho desenvolvendo projetos
            na área para pequenos e médios negócios aqui no interior de sp,
            rodando pra baixo você pode conferir alguns deles.
          </h3>
        </div>
        <img src="img/avatar4.png" className="me" alt="me"></img>
      </section>
    </>
  );
}

export default About;
