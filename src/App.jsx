import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Parallelax from "./Components/Parallelax/Parallelax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Cursor from "./Components/Cursor/Cursor";
import Skills from "./Components/Skills/Skills";
import "./App.css";

const App = () => {
  return <div>
     <Cursor/>
    <section id="HomePage"><NavBar/> < Hero/>
   </section>
    <section id="Skills"><Skills/></section>
    <section id="Experience"><Parallelax /></section>
     <Portfolio/>
<section id="Contact"><Contact/></section>
  </div>;
};

export default App;
