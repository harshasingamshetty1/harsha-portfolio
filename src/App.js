import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="  ">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <SocialLinks />
    </div>
  );
}
