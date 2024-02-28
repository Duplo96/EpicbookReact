import React from "react";
import MyNav from "../components/myNav/MyNav";
import MyFoot from "../components/myFoot/MyFoot";

const Mainlayout = ({ children }) => {
  return (
    <>
      <MyNav
        site={"Fantasy Book"}
        link1={"Home"}
        link2={"About"}
        link3={"Browse"}
      />
      {children}
      <MyFoot />
    </>
  );
};

export default Mainlayout;
