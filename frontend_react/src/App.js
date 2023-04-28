import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar, SocialMedia } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "3rem",
          zIndex: 1000,
        }}
      >
        <SocialMedia />
      </div>
    </div>
  );
};

export default App;
