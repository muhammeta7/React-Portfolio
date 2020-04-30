import React, { Component } from "react";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import "../../styles/aboutme.scss";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="overflow">
                <img
                  src="https://i.imgur.com/En7ZfuO.jpg"
                  alt="/"
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">My Story</h4>
                <p className="card-text text-secondary">
                  I graduated with a Bachelors of Science in Chemical
                  Engineering in 2012 from Rutgers University. Previously I
                  worked in the mechanical engineering and restauraunt
                  industries. In 2016 I had some free time on my hands so I
                  decided to join a Javascript bootcamp. By the end of the
                  program, along with my team mates developed a full stack
                  application using React, MongoDb, and Node realized that this
                  was something I could see myself doing as a career. I still
                  had a hunger to learn and decided to apply to a very selective
                  bootcamp called Zip Code Wilmington. The program itself
                  focuses on Java but it gave me the confidence that I could
                  learn anything if I put my mind to it. Even with the Covid 19
                  outbreak, I was able to develop a full stack application using
                  Spring-Boot, AWS databases, and Angular. I love the endless
                  learning opportunities in this field and am currently pursuing
                  a position as a software engineer to further develop my
                  skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Contact />
          </div>
          <div className="col-md-3">
            <Education />
          </div>
        </div>
      </div>

      //   <Container>
      //     <Row>
      //       <Col>
      //         <Card style={{ width: "24rem" }} className="aboutMeCard">
      //           <Card.Img variant="top" src="https://i.imgur.com/En7ZfuO.jpg" />
      //           <Card.Body>
      //             <Card.Title>My Story</Card.Title>
      //             <Card.Text className="card-text">
      // I graduated with a Bachelors of Science in Chemical
      // Engineering in 2012 from Rutgers University. Previously I
      // worked in the mechanical engineering and restauraunt
      // industries. In 2016 I had some free time on my hands so I
      // decided to join a Javascript bootcamp. By the end of the
      // program, along with my team mates developed a full stack
      // application using React, MongoDb, and Node realized that this
      // was something I could see myself doing as a career. I still
      // had a hunger to learn and decided to apply to a very selective
      // bootcamp called Zip Code Wilmington. The program itself
      // focuses on Java but it gave me the confidence that I could
      // learn anything if I put my mind to it. Even with the Covid 19
      // outbreak, I was able to develop a full stack application using
      // Spring-Boot, AWS databases, and Angular. I love the endless
      // learning opportunities in this field and am currently pursuing
      // a position as a software engineer to further develop my
      // skills.
      //             </Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //       <Col>
      //         <Row>
      //           <Col sm="4">
      //             <Contact />
      //           </Col>
      //           <Col sm="8">
      //             <Education />
      //           </Col>
      //         </Row>
      //       </Col>
      //     </Row>
      //   </Container>
    );
  }
}
