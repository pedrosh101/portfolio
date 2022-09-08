import About from "./components/About";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/Links"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




function App() {

  return (
    <>
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
