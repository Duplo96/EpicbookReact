import "./App.css";
import Allthebooks from "./components/allthebooks/Allthebooks";
import MyNav from "./components/myNav/MyNav";
import MyFoot from "./components/myFoot/MyFoot";
import { SearchProvider } from "./components/provider/SearchContext";
import { useSelector } from "react-redux";
import { darkState } from "./reducer/darkModeSlice";

function App() {
  const isDarkMode = useSelector(darkState);
  document.body.style.backgroundColor = isDarkMode ? "rgb(19, 68, 126)" : "";
  return (
    <>
      <SearchProvider>
        <MyNav
          site={"Fantasy Book"}
          link1={"Home"}
          link2={"About"}
          link3={"Browse"}
        />
        <Allthebooks />
        <MyFoot />
      </SearchProvider>
    </>
  );
}

export default App;
