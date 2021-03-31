import React from "react"

import "../src/styles/reset.css"
import  "./App.scss"

import Header from "../src/components/header/header"
import Footer from "../src/components/footer/footer"


const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
