import React from "react";
import ReactDOM from "react-dom/client";

//Class components
// Create a good practice class components named myComponent

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

// Functional components
// Create a good practice functional components named myComponent

function MyFunctionalComponent() {
  return (
    <>
      <h1>Hello from My Component</h1>
      <p>My component is a functional component</p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MyClassComponent />
    <MyFunctionalComponent />
  </>
);
