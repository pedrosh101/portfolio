import React, { useEffect, useRef } from "react";
import "./Main.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Banner from "./Banner";
gsap.registerPlugin(TextPlugin);

function Main() {
  const helloRef = useRef();

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
      <section className="hello-container">
        <div className="name">
          <p>Pedro Henrique Lima</p>
        </div>
        <div className="hero">
          <h1 ref={helloRef}>{}</h1>
        </div>
      </section>
    </>
  );
}

export default Main;
