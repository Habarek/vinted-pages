import { Link } from "react-router-dom";
import logo from "../img/Vinted_logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <input type="text" placeholder="Recherche des articles" />
      <Link to="/signup">
        <button>S'inscrire</button>
      </Link>
      <Link to="/login">
        <button>Se connecter</button>
      </Link>

      <button>Vends tes articles</button>
    </header>
  );
};

export default Header;
