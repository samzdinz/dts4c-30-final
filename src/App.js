import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import ListMovie from "./components/ListMovie/ListMovie";
import DetailPage from "./components/DetailPage/DetailPage";
import AboutPage from "./components/AboutPage/AboutPage";
import { Route, Routes  } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ListMovie />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
