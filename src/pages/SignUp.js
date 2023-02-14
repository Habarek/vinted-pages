// Importer "Link" pour naviguer entre les pages
// Importer "useState" pour mettre à jour les states
// importer axios pour pouvoir faire la requête
// Installer "js-cookie" (yarn add js-cooki ou npm install js-cookie) et l'importer pour pouvoir stocker le token lors de l'inscription
// Importer "useNavigate" pour rediriger les pages

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = ({ token, setToken }) => {
  // ------------LES STATES------------

  //
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const navigate = useNavigate();
  // State qui envoi un message d'erreur en cas d'erreur programmer dans le catch du try/catch de la requête
  const [errorMessage, setErrorMessage] = useState("");

  const fechToken = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          // ne pas mettre le deuxieme 'email' entres {} car
          // on est en dehor du return qui veut dire qu'on est deja dans du JS, react comprendrais que c'est un objet
          email: email,
          username: userName,
          password: password,
          newsletter: newsLetter,
        }
      );
      // lors de ma reqête je demande si token existe, si il existe je le stock dans "token"
      if (response.data.token) {
        // je stock la valeur dans la variable token
        setToken(response.data.token);

        // je créer le cookie
        Cookies.set("token", token, { expires: 7 });
        // Je redirige sur la page d'acceuil
        navigate("/");
      }

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      // envoiyer dans la console le status de l'error
      console.log(error.response.status);
      //   Si le mail existe déjà je reçois un message d'erreur
      if (error.response.data.message === "This email already has an account") {
        setErrorMessage(
          "Cet email est déjà utilisé, veuillez créer un compte avec un mail valide."
        );
      }
      //   Si un des champ n'est pas rempli je reçois un message d'erreur
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs svp.");
      }
    }
  };

  return (
    <div className="signup">
      <h1>S'inscrire</h1>
      {/* pour un formulaire mettre dans des balise <form> pour le referencement.
      onSubmit est enclencher quand on click sur le button 's'inscrire'
      les type="submit" rafraichissent la page par défault cela va faire perte les valeurs des states et retour à la valeur initial de useState
      Pour évité le rafraichiessement on met "event.preventDefault()" c'est pour ça qu'on le met au début de <form>*/}
      {/* On veut que la requête se fasse quand je clic sur le button "s'inscrire" qui est dans une balise <form> */}
      {/* Comme c'est une balise <form> il faut faire l'appel de la fonction au début de la balise */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // j'appel ma fonction quand je clic sur le bouton s'inscrire
          fechToken();
        }}
      >
        {/* mettre le state en valeur de l'input (value={nom du state} )pour stocker sa valeur*/}

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
        {/* Turner si il a une erreur afficher en rouge le messsage d'erreur */}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>

      <Link to="/login"> Tu as déjà un compte? Connecte-toi!</Link>
    </div>
  );
};

export default SignUp;
