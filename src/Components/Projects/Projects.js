import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import dExpress from "../Images/d-exp.PNG";
import boiPoka from "../Images/boi-poka.PNG";
import vehicles from "../Images/grab-vehicles.PNG";
import hungry from "../Images/hungry-monster.PNG";
import './Projects.css'

const Projects = () => {
  const projectsData = [
    {
      id: "1",
      image: dExpress,
      projectTitle: "D_EXPRESS",
      projectDetails:
        "This is a delivery service-related website. The deliveryman collects the product from the seller and delivered it to the customer.",
      liveLink: "https://d-express-e9155.web.app/"
    },
    {
      id: "2",
      image: boiPoka,
      projectTitle: "BOI POKA",
      projectDetails:
        "An e-commerce website where different types of books available. Customers can visit this website to find out their lovable books and buy those books",
        liveLink: "https://boi-poka-ff551.web.app/"
    },
    {
      id: "3",
      image: vehicles,
      projectTitle: "GRAB VEHICLES",
      projectDetails:
        "We are providing you different types of vehicles to go to your destination safe and sound. Visit our website and select your suitable vehicle without any hesitation",
        liveLink: "https://grab-vehicles.web.app/"
    },
    {
      id: "4",
      image: hungry,
      projectTitle: "HUNGRY MONSTER",
      projectDetails:
        "Are you wanted to try anything new?. Today you want to make a new dishes. Just one click you will know the ingredient list which dishes you want to cook ",
        liveLink: "https://amin1165164.github.io/programming-hero-assignment5/index.html"
    },
  ];
  return (
    <section id="project" className="project">
      <h1 className="main-header text-center">PROJECTS</h1>
      <div className="commonBorder"></div>
      <div className="row">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
