import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (token) console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return token ? (
    <div className="publication">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handlePublish();
        }}
      >
        <div>
          {/* Pour faire afficher l'image sélectionner */}
          {picture && <img src={URL.createObjectURL(picture)} alt="product" />}

          <p>Ajoute une photo</p>
          <input
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <p>Titre</p>
          <input
            value={title}
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Décris ton article</p>
          <textarea
            value={description}
            type="textarea"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <p>marque</p>
          <input
            value={brand}
            type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Taille</p>
          <input
            value={size}
            type="text"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Couleur</p>
          <input
            value={color}
            type="text"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Etat</p>
          <input
            value={condition}
            type="text"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Lieu</p>
          <input
            value={city}
            type="text"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Prix</p>
          <input
            value={price}
            type="text"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  ) : (
    navigate("/login")
  );
};
export default Publish;
