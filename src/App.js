import "./App.css";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import AllNotes from "./components/AllNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<AllNotes />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
