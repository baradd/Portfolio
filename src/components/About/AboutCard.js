import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Tavassolian </span>
            from <span className="purple"> Tehran, Iran.</span>
            <br />
            I am currently employed as a software developer at <a href="https://naitco.es">Naitco</a>.
            <br />
            I have completed Bachelor of Science (B.Sc.) in Computer Science at Golestan
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Crypto Currencies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
