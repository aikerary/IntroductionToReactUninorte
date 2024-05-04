// Functional components
// Create a good practice functional components named myComponent
import React from "react";

function MyFunctionalComponent({price, stock}) {
  return (
    <>
      <h1>Hello from My Component {price}</h1>
      <p>My component is a functional component {stock}</p>
    </>
  );
}

export default MyFunctionalComponent;
