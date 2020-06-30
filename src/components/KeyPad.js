import React, { Component } from "react";
import Button from "./Button";

class KeyPad extends Component {
  render() {
    return (
      <div className="gridNumber">
        <div>
          <Button num={this.props.currentStateNumber} number="1" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="2" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="3" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="4" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="5" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="6" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="7" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="8" />
        </div>
        <div>
          <Button num={this.props.currentStateNumber} number="9" />
        </div>
      </div>
    );
  }
}

export default KeyPad;
