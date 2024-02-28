import React from "react";
import Allthebooks from "../components/allthebooks/Allthebooks";
import Mainlayout from "../layouts/Mainlayout";

const Homepage = () => {
  return (
    <Mainlayout>
      <Allthebooks />
    </Mainlayout>
  );
};

export default Homepage;
