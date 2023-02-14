import { useState, useEffect } from "react";
import axios from "axios";
import img from "../img/pageHome.jpg";

const Home = () => {
  // State qui me sert à récupérer la data
  const [data, setData] = useState();
  // State qui me sert à savoir si la data a été récupérée
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Je déclare la focntion qui fait la requête
    const fetchData = async () => {
      // Ma requête peut échouer docn je la place dans un try catch
      try {
        // Création de la variable response pour stocker les infos du liens
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        // Je stocke le résultat dans data
        setData(response.data);
        // Je fais paser isLoading à false
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    // J'appelle ma fonction
    fetchData();
  }, []);
  return isLoading ? (
    <p>Is Loading</p>
  ) : (
    <div>
      {/* <img src={img} alt="" srcset="" /> */}
      <div className="">
        <div className="container">
          <div className="vendre">
            <p>Prêts à faire du tri dans vos placards ?</p>
            <button>Commencer à vendre</button>
          </div>
          {/* pour afficher les photo de profils */}
          {/* {data.offers.map((profils) => {
          console.log(profils.owner.account.avatar.secure_url);
          return (
            <div key={profils._id}>
              <img src={profils.owner.account.avatar.url} />
            </div>
          );
        })} */}

          <div className="profils">
            {/* POUR AFFICHER LES OFFRES (photo de profil,pseudo,photo,taille,marque)
          parcourir le taleau offers avec le .map() et faire une fonction "()=>{" dans les () de .map faire un return pour vouloir ce que l'on veut qu'il nous retourne */}
            {data.offers.map((offres) => {
              console.log(offres);
              // if ({offres.owner.account.avatar.secure_url )
              return (
                <div>
                  <div className="avatar">
                    {/* des photos de profil n'existe pas alors on fait une turner pour dire que si la clef avatar existe alor on affiche les photos de la clef avatar */}
                    {offres.owner.account.avatar && (
                      <img
                        className="photoDeProfil"
                        // style={{ borderRadius: "70%", height: 30 }} (EXPREMPLE STYLE INLINE)
                        src={offres.owner.account.avatar.url}
                      />
                    )}
                    <span>{offres.owner.account.username}</span>,
                    <img className="photo" src={offres.product_image.url} />
                    <div>{offres.product_price} €</div>
                    {/* Pour afficher les marques: reprendre à partir de l'argument 'offres' qui est le nom de la "clef" qu'on lui a donné pour pouvoir parcourir le tableau 'offers' et non partir du début (data.offers.map). créer "clef temporaire" que l'on nomme "marques" pour pouvoir parcourir le tableau produc_details et recupérer la clef "MARQUE"   */}
                    {offres.product_details.map((marquesEtTaille) => {
                      // Faire un return pour pouvoir afficher
                      return (
                        <div>
                          <div>{marquesEtTaille.MARQUE}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
