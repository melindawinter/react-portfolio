import React from "react";
import "./Projects.css";
import image from "../../images/sw.png";
import image2 from "../../images/burger.png";
import image3 from "../../images/weather.png";
import image4 from "../../images/scheduler.png";
import image5 from "../../images/code-quiz.png";
import image6 from "../../images/teams.png";

export default function Projects() {
  return (
    <main>
      <div className="container">
        <div className="row pt-5">
          <div className="card project-card width">
            <img
              src={image}
              className="card-img-top"
              alt="Spontaneous Weekend website"
            />
            <div className="card-body project-card">
              <h5 className="card-title">Spontaneous Weekend</h5>
              <p className="card-text">
                A weekend activities randomizer app for the indecisive designed
                by me, Cyrus Jose, and Kate An.
              </p>
              <a
                href="https://secure-savannah-12538.herokuapp.com/signup.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/melindawinter/Spontaneous-Weekend"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Explore Code
              </a>
            </div>
          </div>

          <div className="card project-card width">
            <img
              src={image2}
              className="card-img-top"
              alt="Plant Burger website"
            />
            <div className="card-body project-card">
              <h5 className="card-title">Plant Burger</h5>
              <p className="card-text">
                Order up a delicious plant-based burger with this app.
              </p>
              <a
                href="https://radiant-meadow-34570.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/melindawinter/burger"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Explore Code
              </a>
            </div>
          </div>

          <div className="card project-card width">
            <img
              src={image3}
              className="card-img-top"
              alt="Weather Dashboard website"
            />
            <div className="card-body project-card">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                Use this weather dashboard I designed to get today's weather and
                a five day forecast for your city.
              </p>
              <a
                href="https://melindawinter.github.io/weather-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/melindawinter/weather-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Explore Code
              </a>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="card project-card width">
            <img
              src={image4}
              className="card-img-top"
              alt="Work Day Scheduler website"
            />
            <div className="card-body project-card">
              <h5 className="card-title">Work Day Scheduler</h5>
              <p className="card-text">
                I designed this work day event planner to help you stay on
                schedule.
              </p>
              <a
                href="https://melindawinter.github.io/work-day-scheduler/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/melindawinter/work-day-scheduler"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Explore Code
              </a>
            </div>
          </div>

          <div className="card project-card width">
            <img
              src={image5}
              className="card-img-top"
              alt="Code Quiz website"
            />
            <div className="card-body project-card">
              <h5 className="card-title">Code Quiz</h5>
              <p className="card-text">
                I have created a short quiz about coding in JavaScript to test
                your knowledge. Press Start and begin the quiz
              </p>
              <a
                href="https://melindawinter.github.io/code-quiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/melindawinter/code-quiz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Explore Code
              </a>
            </div>
          </div>

          <div className="card project-card width">
            <img
              src={image6}
              className="card-img-top"
              alt="Team Generator website"
            />
            <div className="card-body project-card">
              <h5 className="card-title">Team Generator</h5>
              <p className="card-text">
                This is a cli app that will allow an employer to easily create a
                webpage with a team's contact information.
              </p>

              <a
                href="https://github.com/melindawinter/team-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Explore Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
