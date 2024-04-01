
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./Components/LogIn";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Wellcome from "./Components/Wellcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/wellcome" element={<Wellcome/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
