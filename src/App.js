import React from "react";
import "./App.css";
import Particles from "react-particles-js";
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
    <>
      <Particles
        params={{
          particles:{
            number:{
              value: 50,
              density:{
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type:"star",
              stroke:{
                width: 6,
                color: "#f89335f1"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
