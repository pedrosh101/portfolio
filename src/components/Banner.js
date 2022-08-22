import "./Banner.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function Banner() {
  const logoRef = useRef(null);
  const openBan = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const phl = logoRef.current;
    const open = openBan.current;

    function allowSize() {
      document.querySelector("html").style.overflowY = "auto";
    }

    tl.current = gsap
      .timeline()
      .fromTo(phl, { rotation: 180 }, { rotation: 360, duration: 2 })
      .fromTo(phl, { y: 200 }, { y: 0, duration: 2 }, "<")
      .fromTo(
        open,
        { x: 0 },
        { x: 2000, duration: 1.5, onComplete: allowSize}
      );
  }, []);

  return (
    <>
      <section>
        <div className="banner" ref={openBan}>
          <h1 ref={logoRef}>PHL</h1>
          <div className="block"></div>
        </div>
      </section>
    </>
  );
}

export default Banner;
