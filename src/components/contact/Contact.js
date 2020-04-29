import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <ul className="list-group">
          <li className="list-group-item text-center">Contact Info</li>
          <li className="list-group-item text-center">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <p className="contact-info">Github</p>
          </li>
          <li className="list-group-item text-center">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <p className="contact-info">LinkedIn</p>
          </li>
          <li className="list-group-item text-center">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <p className="contact-info">609-202-1966</p>
          </li>
          <li className="list-group-item text-center">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <p className="contact-info">Email</p>
          </li>
        </ul>
      </div>
    );
  }
}
