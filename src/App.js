import "./App.css";
import ResponsiveAppBar from "./components/navigation-bar/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ListMovie from "./pages/ListMovie";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
// import { listener } from "./components/utils/firebase/listener";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="list" element={<ListMovie />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
