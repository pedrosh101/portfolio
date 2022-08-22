import { useState, useEffect } from "react";
import "./Projects.css";
import { ProjectImg } from "./ProjectImg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="projects">
        {ProjectImg.map((elem, i) => (
          <li key={i} className="li">
            <span className="title">{elem.name}</span>
            <div className="img-cont">
              <img src={elem.img} alt={elem.name} />
            </div>
            <p className="aviso">{elem.aviso}</p>
            <div>
              <p className="links">{elem.text}</p>
              <p className="links">{elem.text2}</p>
            </div>
          </li>
        ))}
      </section>
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="cursor"
      ></div>
    </>
  );
}

export default Projects;
