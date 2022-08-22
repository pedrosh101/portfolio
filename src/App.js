import About from "./components/About";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/Links"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// import Scroll from "./components/SmoothScroll"

function App() {

  return (
    <>
      {/* <Scroll /> */}
      <Main />
      <About />
      <Projects />
      <Contact
        sentenceOne={"mande uma mensagem!"}
        crossreveal={"yPercent"}
      />
      <Links />
    </>
  );
}

export default App;
