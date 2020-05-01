import React, { Component } from "react";
import "../../styles/aboutme.scss";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card text-center">
          <div>
            <img
              src="https://i.imgur.com/En7ZfuO.jpg"
              alt="/"
              className="card-img-top"
            />
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">My Story</h4>
            <p className="card-text text-secondary text-left">
              I graduated with a Bachelors of Science in Chemical Engineering in
              2012 from Rutgers University. Previously I worked in the
              mechanical engineering and restauraunt industries. In 2016 I had
              some free time on my hands so I decided to join a Javascript
              bootcamp. By the end of the program, along with my team mates
              developed a full stack application using React, MongoDb, and Node
              realized that this was something I could see myself doing as a
              career. I still had a hunger to learn and decided to apply to a
              very selective bootcamp called Zip Code Wilmington. The program
              itself focuses on Java but it gave me the confidence that I could
              learn anything if I put my mind to it. Even with the Covid 19
              outbreak, I was able to develop a full stack application using
              Spring-Boot, AWS databases, and Angular. I love the endless
              learning opportunities in this field and am currently pursuing a
              position as a software engineer to further develop my skills.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
