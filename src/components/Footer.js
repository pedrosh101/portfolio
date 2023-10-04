import "./Footer.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const linksRef = useRef(null);

  useEffect(() => {
    const links = linksRef.current;

    gsap.fromTo(
      links,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 4.5,
        scrollTrigger: { trigger: links },
      }
    );
  }, []);

  return (
    <section className="linksContainer">
      <div className="allLinks" ref={linksRef}>
        <div className="logoArea">
          <a href="https://wa.me/5512981622637" target="blank">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
          <a href="mailto:pedro.sh101@gmail.com" target="blank">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
          <a
            href="https://www.behance.net/pedrosh101"
            target="blank"
          >
            <ion-icon name="logo-behance"></ion-icon>
          </a>
          <a href="https://github.com/pedrosh101" target="blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/pedrohenriquedasilvalima/" target="blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
