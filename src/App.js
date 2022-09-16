import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
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
