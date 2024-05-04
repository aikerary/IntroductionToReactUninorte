//Class components
// Create a good practice class components named myComponent
import React from "react";


class MyClassComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;
    return (
      <>
        <h1>Hello from {title}</h1>
        <p>{description}</p>
      </>
    );
  }
}

export default MyClassComponent;