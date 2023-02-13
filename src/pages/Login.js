import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="login">
      <h1>Se connecter</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
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
      </form>

      <Link to="/signup">Pas encore de compte? Inscris-toi!</Link>
    </div>
  );
};
export default Login;
