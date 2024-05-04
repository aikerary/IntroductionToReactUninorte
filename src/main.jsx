import React from "react";
import ReactDOM from "react-dom/client";
import MyClassComponent from "./components/MyClassComponent/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent/MyFunctionalComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MyClassComponent />
    <MyFunctionalComponent />
  </>
);
