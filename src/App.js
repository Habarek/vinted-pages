import "./App.css";

// Import des composant permettant d'avoir plusieurs pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import de mes pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

// import du composant Header que je met sous le ROUTER pour qu'il soir présent sur toutes mes pages
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(true);

  // créer le state token sur app pour qu'il puisse être

  return (
    <div className="App">
      <Router>
        <Header token={token} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<SignUp token={token} setToken={setToken} />}
          />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
