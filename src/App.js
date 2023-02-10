import "./App.css";

// Import des composant permettant d'avoir plusieurs pages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import de mes pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

// import du composant Header que je met sous le ROUTER pour qu'il soir présent sur toutes mes pages
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
