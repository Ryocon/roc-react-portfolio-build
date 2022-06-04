import React from "react";
import "./ProjectStyles.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import altf4 from "../assets/images/alt-f4-gif.gif";
import mcudeepdive from "../assets/images/mcu-deep-diver-demo.gif";
import pokemonapi from "../assets/images/pokemon-api-desktop-gif.gif";
import teamprofile from "../assets/images/team-profile-gen-example-output.png";
import sqlemployeetracker from "../assets/images/sql-employee-tracker-image.PNG";
import weatherdashboard from "../assets/images/weather-dash-gif.gif";

const ProjectData = [
  {
    id: 1,
    imgsrc: altf4,
    title: "Alt-F4",
    desc: "A heroku deployed site where users can create accounts and review games. IGDB intergration allows users to search any game and leave a review",
    github: "https://github.com/Ryocon/ALT-F4",
    deployment: "https://alt-f4-project-2.herokuapp.com/",
  },
  {
    id: 2,
    imgsrc: mcudeepdive,
    title: "MCU-Deep-Diver",
    desc: "Using the Marvel and OMDB API's to allow users to search for Marvel characters within films and comics. Displays search results to the page, uses local storage and pagination",
    github: "https://github.com/Ryocon/MCU-deep-diver",
    deployment: "https://ryocon.github.io/MCU-deep-diver/",
  },
  {
    id: 3,
    imgsrc: pokemonapi,
    title: "Pokemon-API",
    desc: "A web app used to display the original 151 Pokemon, allow a user to compare Pokemon side by side and to also save their favourites using local storage",
    github: "https://github.com/Ryocon/pokemon-api",
    deployment: "https://ryocon.github.io/pokemon-api/",
  },
  {
    id: 4,
    imgsrc: teamprofile,
    title: "Team-Profile-Gen",
    desc: "A Nodejs application used to dynamically generate a team profile when provided with user input",
    github: "https://github.com/Ryocon/pokemon-api",
    deployment: "https://ryocon.github.io/pokemon-api/",
  },
  {
    id: 5,
    imgsrc: sqlemployeetracker,
    title: "SQL-Employee-Tracker",
    desc: "SQL based employee tracker. Users can view, update, delete and add to the database using Nodejs",
    github: "https://github.com/Ryocon/sql-employee-tracker",
    deployment: "https://github.com/Ryocon/sql-employee-tracker",
  },
  {
    id: 6,
    imgsrc: weatherdashboard,
    title: "Weather-Dashboard",
    desc: "Realtime weather dashboard based on user input of a city. Uses the OpenWeather API to generate the data",
    github: "https://github.com/Ryocon/weather-dashboard-roc",
    deployment: "https://ryocon.github.io/weather-dashboard-roc/",
  },
];

function Projects() {
  return (
    <Container>
      <Row>
        {ProjectData.map(({ id, imgsrc, title, desc, github, deployment }) => {
          return (
            <Col key={id}>
              <Card
                id="project-card"
                style={{
                  width: "20rem",
                  height: "26rem",
                  padding: "4px",
                  marginBottom: "15px",
                }}
              >
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={imgsrc}
                  alt={title}
                  style={{ height: "176px" }}
                />
                <Card.Body>
                  <Card.Title className="project-title">{title}</Card.Title>
                  <Card.Text style={{ height: "110px" }}>{desc}</Card.Text>
                  <Button
                    href={github}
                    className="mx-4 btn-outline-dark"
                    target="_blank"
                    variant="light"
                  >
                    Github
                  </Button>
                  <Button
                    href={deployment}
                    target="_blank"
                    className="btn-outline-dark"
                    variant="light"
                  >
                    Deployment
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
