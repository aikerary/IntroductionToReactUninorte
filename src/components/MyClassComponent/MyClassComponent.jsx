//Class components
// Create a good practice class components named myComponent
import React from "react";


class MyClassComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Title: {this.props.title}</h1>
        <p>Description: {this.props.description}</p>
      </>
    );
  }
}

export default MyClassComponent;