import "./App.css";

import { SearchProvider } from "./components/provider/SearchContext";
import { useSelector } from "react-redux";
import { darkState } from "./reducer/darkModeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePages from "./pages/ProfilePage";

function App() {
  const isDarkMode = useSelector(darkState);
  document.body.style.backgroundColor = isDarkMode ? "rgb(19, 68, 126)" : "";
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path=":id" element={<ProfilePages />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
