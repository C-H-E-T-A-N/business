import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
