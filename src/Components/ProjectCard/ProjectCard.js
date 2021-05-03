import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { image, projectTitle, projectDetails, liveLink } = props.project;

  return (
    <div className="col-md-4">
      <div className="container">
        <div className="project-card h-100">
          <img className="img-fluid my-2" src={image} alt="" />
          <h4>{projectTitle}</h4>
          <h5>{projectDetails}</h5>
          <div className="d-flex justify-content-between mt-3">
            <a
              href={liveLink}
              className="card-button"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <HiEye className="headerIcon" /> Preview
            </a>
            <div class="dropdown">
              <button
                class="btn card-button dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaGithub className="headerIcon" /> Github
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a
                    href="/"
                    className="card-button dropdown-item"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Server Site
                  </a>
                </li>
                <li>
                <a
                    href="/"
                    className="card-button dropdown-item"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Client Site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
