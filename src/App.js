import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Wave  from "./PortfolioContainer/Home/WaveFolder/Wave";
import Nav  from "./PortfolioContainer/Nav/Nav";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import About from "./PortfolioContainer/AboutMe/About";
import Experience from "./PortfolioContainer/Experience/Experince"
import Footer from "./PortfolioContainer/Footer/Footer"; 
import Summary from "./PortfolioContainer/Experince-Summry/Summary";
import Portfolio from "./PortfolioContainer/Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
      <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
      <Profile />
      <Nav />
      <Wave />
      <About />
      <Experience />
      <Summary />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
