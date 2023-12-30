import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SurveyForm from "./components/SurveyForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SurveyForm/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
