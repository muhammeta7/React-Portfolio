import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </li>
          <li class="list-group-item">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </li>
          <li class="list-group-item">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </li>
          <li class="list-group-item">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </li>
        </ul>
      </div>
    );
  }
}
