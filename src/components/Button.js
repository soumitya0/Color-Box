import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.number, "number");

    console.log(this.props.num, "num");

    return (
      <div>
        <div
          className={`button ${
            this.props.number === this.props.num ? "active" : "Notactive"
          }`}
        >
          {" "}
          {this.props.number}
        </div>
      </div>
    );
  }
}

export default Button;
