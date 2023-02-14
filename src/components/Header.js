import { Link } from "react-router-dom";
import logo from "../img/Vinted_logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="   Recherche des articles" />
      </div>
      <div className="button">
        <Link to="/signup">
          <button>S'inscrire</button>
        </Link>
        <Link to="/login">
          <button>Se connecter</button>
        </Link>
      </div>

      <div className="vente">
        <Link to="/publish">
          <button>Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
