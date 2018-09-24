import React from "react";
import "../css/style.css";
import image from "../images/web.png";

export default class App extends React.Component {
  handleClick() {
    console.log("Hello World");
  }
  render() {
    console.log("rendering");
    return (
      <div>
        <h1>Hello SSR</h1>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        <img src={image} />
      </div>
    );
  }
}
