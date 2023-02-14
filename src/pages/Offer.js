// J'IMPORTE LES ETATS

// Importer useParams pour les routes?
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// J'IMPORTE AXIOS POUR FAIRE LA REQUÊTE
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Je récupère l'id présent dans l'url
  const params = useParams();
  const id = params.id;
  //   console.log(params);

  useEffect(() => {
    // fetchData est une fonction qui va permettre de faire la recherche dans axios
    // on met le async ici car on ne peut pas le faire apres le useEffect
    const fetchData = async () => {
      try {
        // la variable response permet de stocker les données de la requête axios
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        //   On récupère uniquement la data de la variable response dans setData
        setData(response.data);
        //   une fois les données récupéré dans setData on change la valeur de setIsLoadind
        setIsLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    //   Appel de la fonction fetchData sinon pas de
    // requête axios pas de stockage d'info setIsLoading reste à true
    //  donc pas de page affiché
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div classeName="offre">
      <div>
        <img src={data.product_image.secure_url} alt="" srcset="" />
      </div>
      <p>{data.product_price} €</p>
      <p>{data.product_name}</p>
      <p>{data.product_description}</p>
      <p>{data.owner.account.username}</p>
      <Link to="/payment">
        <button>Acheter</button>
      </Link>
    </div>
  );
};

export default Offer;
