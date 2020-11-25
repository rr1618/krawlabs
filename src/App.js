import logo from './logo.svg';
import './App.css';
import SecondPage from "./components/page2";
import Home from "./components/home";
import ButtonSlider from "./components/buttonslider";
import React from "react";
function App() {
  return (
    <div>
      <Home/>
      <SecondPage/>
        <ButtonSlider/>
    </div>
  );
}

export default App;
