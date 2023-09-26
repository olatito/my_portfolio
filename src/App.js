import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experiences/Experiences";
import Home from "./components/Home/Home";
import Service from "./components/MyService/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import NavBar from "./components/navBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
