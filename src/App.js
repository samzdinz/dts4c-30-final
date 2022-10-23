import './App.css';
import ResponsiveAppBar from './components/navigation-bar/Navbar';
import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ListMovie from './pages/ListMovie';
import {Route, BrowserRouter,Routes} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="list" element={<ListMovie />} />
        </Routes>
    </BrowserRouter>
      </div>
    
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

export default App;
