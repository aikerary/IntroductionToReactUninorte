// Functional components
// Create a good practice functional components named myComponent
import React from "react";
import {useState} from "react";

function MyFunctionalComponent({price, stock}) {
    const [amount, setAmount] = useState(0);
  return (
    <>
      <h1>Hello from My Component {price}</h1>
      <hr />
      <p>My amount is {stock}</p>
      <hr />
        <p>My amount is {amount}</p>
        <button onClick={() => setAmount(amount + 1)}>Add</button>
        <button onClick={() => setAmount(amount - 1)}>Subtract</button>
    </>
  );
}

export default MyFunctionalComponent;
