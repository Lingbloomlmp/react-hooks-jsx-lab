import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  <div id='home' >
    <h1 style='color:firebrick'> {name} is a Web Developer from {city}</h1>
  </div>

  // update the JSX being returned!
  return <div>Home</div>;
}

export default Home;
