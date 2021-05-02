import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Projects/>
      <Resume/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
