import "./App.css";
import Allthebooks from "./components/allthebooks/Allthebooks";
import MyNav from "./components/myNav/MyNav";
import MyFoot from "./components/myFoot/MyFoot";

function App() {
  return (
    <>
      <MyNav
        site={"Fantasy Book"}
        link1={"Home"}
        link2={"About"}
        link3={"Browse"}
      />
      <Allthebooks />
      <MyFoot />
    </>
  );
}

export default App;
