//Class components
// Create a good practice class components named myComponent
import React from "react";


class MyClassComponent extends React.Component {
  myMethod() {
    console.log("Hello from myMethod");
  }
  render() {
    return (
      <>
        <h1>Hello from My Component</h1>
        <p>My component is a class component</p>
      </>
    );
  }
}

export default MyClassComponent;