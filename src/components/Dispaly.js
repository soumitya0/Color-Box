import React, { Component } from "react";
import Button from "./Button";
import KeyPad from "./KeyPad";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const number = event.target.elements.number.value;
    console.log(number);

    if (number.charCodeAt() > 57 || number < 1 || number > 9) {
      alert("Please input a number between 1-9 must be displayed");
    }

    this.setState({
      value: number,
    });
  };

  render() {
    console.log(this.state.value, "sakit");
    return (
      <div className="MainGrid">
        <form className="girLeft" onSubmit={this.handleSubmit}>
          <input type="text" name="number" />

          <input type="submit" value="Submit" />
        </form>

        <KeyPad currentStateNumber={this.state.value} />
      </div>
    );
  }
}

export default Display;
