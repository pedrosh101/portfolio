import React, { useRef, useEffect } from "react";
import "./Invite.css";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Invite({ crossreveal }) {
  const containerRef = useRef(null);
  const blueRef = useRef(null);
  const triggerRef = useRef(null);
  const quoteRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: () => "+=" + triggerRef.current.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    crossRevealTween
      .fromTo(
        containerRef.current,
        { [crossreveal]: 100, x: 0 },
        { [crossreveal]: 0 }
      )

      .fromTo(
        blueRef.current,
        { [crossreveal]: -100, x: 0 },
        { [crossreveal]: 0 },
        0
      )

      .fromTo(quoteRef.current, { opacity: 0, delay: 0.26 }, { opacity: 1 }, 0);
  }, [crossreveal]);

  return (
    <section className="end" ref={triggerRef}>
      <div className="crossRevealScreen"></div>
      <div className="crossRevealScreen afterScreen" ref={containerRef}>
        <div className="blue" ref={blueRef} />
      </div>
      <div className="textoPos">
        <p className="quoteFinal" ref={quoteRef}>
        {t("invite")}
        </p>
        <p className="convite">{t("inviteQ")} <br className="breakConvite"/></p>
      </div>
    </section>
  );
}

export default Invite;
