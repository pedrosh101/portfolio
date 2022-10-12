
import Main from "./components/Main";
import Projects from "./components/Projects";
import Invite from "./components/Invite";
import Footer from "./components/Footer"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




function App() {

  return (
    <>
      <Main />
      <Projects />
      <Invite
        sentenceOne={"mande uma mensagem!"}
        crossreveal={"yPercent"}
      />
      <Footer />
    </>
  );
}

export default App;
