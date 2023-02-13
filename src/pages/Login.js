import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const connection = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",

        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);

      // pas besoin de comparé les token de l'inscription avec ceux de la connection
      if (response.data.token) {
        let token = response.data.token;
        Cookies.set("cookieLogin", token, { expires: 7 });
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      {
        if (error.response.data.message === "User not found")
          setErrorMessage("Utilisateur non trouvé");
      }

      if (error.response.data.error === "Unauthorized") {
        setErrorMessage("Votre email ou votre mot de passe n'est pas valid.");
      }

      // console.log(error.response.status);
      // if (error.response.status === 401) {
      //   setErrorMessage("Votre email ou votre mot de passe n'est pas valid.");
      // }
    }
  };

  return (
    <div className="login">
      <h1>Se connecter</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          connection();
        }}
      >
        <input
          value={email}
          type="text"
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Mot de passee"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit"> Se connecter</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>

      <Link to="/signup">Pas encore de compte? Inscris-toi!</Link>
    </div>
  );
};
export default Login;
