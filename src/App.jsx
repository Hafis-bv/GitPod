import React from "react";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Enviroments from "./components/Enviroments/Enviroments";
import Remote from "./components/Remote/Remote";
import Reviews from "./components/Reviews/Reviews";
import Brands from "./components/Brands/Brands";

const App = () => {
  return (
    <>
      <Hero />
      <Info />
      <Enviroments />
      <Remote />
      <Reviews />
      <Brands />
    </>
  );
};

export default App;
