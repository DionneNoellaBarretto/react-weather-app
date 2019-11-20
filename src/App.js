import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by{" "}
        <a href="https://www.delac.io/" target="_blank">
          Matt Delac
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/wecodeschool/react-weather-app"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}