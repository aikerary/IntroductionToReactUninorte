//Class components
// Create a good practice class components named myComponent
import React from "react";


class MyClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      amount: 0
    };
  }

  render() {
    const { title, description } = this.props;
    const {amount} = this.state;
    return (
      <>
        <h1>Hello from {title}</h1>
        <p>{description}</p>
        <hr />
        <p>My amount is {amount}</p>
        <button onClick={() => this.setState({amount: amount + 1})}>Add</button>
        <button onClick={() => this.setState({amount: amount - 1})}>Subtract</button>
      </>
    );
  }
}

export default MyClassComponent;