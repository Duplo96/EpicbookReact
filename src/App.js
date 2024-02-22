import "./App.css";
import Allthebooks from "./components/allthebooks/Allthebooks";
import MyNav from "./components/myNav/MyNav";
import MyFoot from "./components/myFoot/MyFoot";
import { SearchProvider } from "./components/provider/SearchContext";

function App() {
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
