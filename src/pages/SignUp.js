// Importer "Link" pour naviguer entre les pages
// Importer "useState" pour mettre à jour les states
// importer axios pour pouvoir faire la requête

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  const fechToken = async () => {
    try {
      const response = await axios.post(
        "lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          // ne pas mettre le deuxieme 'email' entres {} car
          // on est en dehor du return qui veut dire qu'on est deja dans du JS, react comprendrais que c'est un objet
          email: email,
          username: userName,
          password: password,
          newsletter: newsLetter,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
    fechToken();
  };

  return (
    <div className="signup">
      <h1>S'inscrire</h1>
      {/* mettre le state en valeur de l'input (value={nom du state} )pour stocker sa valeur*/}
      {/* pour un formulaire mettre dans des balise <form> pour le referencement.
      onSubmit est enclencher quand on click sur le button 's'inscrire'
      les type="submit" rafraichissent la page par défault il a perte des valeurs des states et retour à la valeur initial de useState
      Pour évité le rafraichiessement on met "event.preventDefault()" c'est pour ça qu'on le met au début de <form>*/}
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          value={userName}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          value={newsLetter}
          type="checkbox"
          //   Je ne met pas de event car je ne recherche pas d'evenment quand je modifie sa valeur
          //  je ve juste modifier sa valeur de base
          onChange={() => {
            setNewsLetter(!newsLetter);
          }}
        />

        <span>S'incrire à notre newletter</span>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes & Condition
          et Plitique de Confidentialité de Vinted. Je confirme avoir au moins
          18ans
        </p>
        <button type="submit">S'inscrire</button>
      </form>

      <Link to="/login"> Tu as déjà un compte? Connecte-toi!</Link>
    </div>
  );
};

export default SignUp;
