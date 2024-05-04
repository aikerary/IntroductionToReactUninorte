import React from 'react'
import ReactDOM from 'react-dom/client'

//Class components
// Create a good practice class components named myComponent

class MyComponent extends React.Component {
  render() {
    return (
      <>
      <h1>Hello from My Component</h1>
      <p>My component is a class component</p>
      </>
    )
  }
}

//Functional components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
)
