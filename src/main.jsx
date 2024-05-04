import React from "react";
import ReactDOM from "react-dom/client";
import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MyClassComponent title="My Class Component" description="This is a class component"/>
    <MyFunctionalComponent />
  </>
);
