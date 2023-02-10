import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Se connecter</h1>
      <form>
        <input type="text" placeholder="Adresse email" />
        <input type="text" placeholder="Mot de passa" />
        <button> Se connecter</button>
      </form>

      <Link to="/signup">Pas encore de compte? Inscris-toi!</Link>
    </div>
  );
};
export default Login;
