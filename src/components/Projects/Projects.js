import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import welfare from "../../Assets/Projects/welfare.jpg";
import karenkish from "../../Assets/Projects/karenkish.png";
import inspection from "../../Assets/Projects/inspection.jpg";
import reval from "../../Assets/Projects/reval.png";
import hamava from "../../Assets/Projects/hamava.png";
import ees from "../../Assets/Projects/ees.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reval}
              isBlog={false}
              title="Reval"
              description="Reval is a modular cloud ERP software designed for every business need inspection. Reval is a comprehensive business management solution that helps small and midsized companies connect their finance, sales, service, and operations teams within a single easy-to-use application."
              ghLink=""
              demoLink="https://reval.ir/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ees}
              isBlog={false}
              title="Retime"
              description="Retime is the best way to track employee work hours and time spent on jobs or projects. Designed specifically for non-desk teams of all industries, the employee time clock syncs with the shift scheduler and allows you to monitor attendance, PTO, breaks, and overtime hours in real-time."
              ghLink=""
              demoLink="https://naitco.ir/ees/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inspection}
              isBlog={false}
              title="Inspection app"
              description="This project is an application for inspectors to collect data such as movies or pictures of products that they examine. This app could interact with Reval(my another project) system."
              ghLink=""
              demoLink="https://reval.ir/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={welfare}
              isBlog={false}
              title="Welfare system"
              description="This system is designed for students and professors in universities to book their accommodation or reserve their meals."
              ghLink=""
              demoLink="https://samasoft.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hamava}
              isBlog={false}
              title="Hamava"
              description="Hamava is a comprehensive university platform to arrange all task in university includes take courses, submit grades, arrange classes and etc."
              ghLink=""
              demoLink="https://samasoft.net" //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={karenkish}
              isBlog={false}
              title="Karenkish school"
              description="Karenkish is the name of project which is managing a school to operate their tasks. Holding online classes, submit students grades, arranging teachers' schedule are some features which this app can provide for schools."
              ghLink=""
              demoLink="https://karenkish.ir/"//      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
