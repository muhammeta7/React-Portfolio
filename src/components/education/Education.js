import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <ul className="list-group">
          <li className="list-group-item text-center">Education</li>
          <li className="list-group-item text-left">
            B.S Chemical Engineering Rutgers University 2012
          </li>
          <li className="list-group-item text-left">
            Rutgers Javascript Bootcamp 2016
          </li>
          <li className="list-group-item text-left">
            ZCW Coding Bootcamp 2020
          </li>
        </ul>
      </div>
    );
  }
}
