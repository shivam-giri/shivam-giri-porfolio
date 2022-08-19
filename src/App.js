import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Wave  from "./PortfolioContainer/Home/WaveFolder/Wave";
import Nav  from "./PortfolioContainer/Nav/Nav";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import About from "./PortfolioContainer/AboutMe/About";
import Experience from "./PortfolioContainer/Experience/Experince"
import Footer from "./PortfolioContainer/Home/WaveFolder/Wave"; 

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Wave />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
