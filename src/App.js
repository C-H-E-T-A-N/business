import './App.css'
import NavBar from './components/NavBar';
import AddBn from './components/AddBn';
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
    <AddBn/>
     </>
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
