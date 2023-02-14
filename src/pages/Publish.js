import { useState } from "react";
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

  return (
    <div className="publication">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
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
                  "content-Type": "multipart/form-data",
                },
              }
            );
            console.log(response);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <div>
          <p>Ajoute une photo</p>
          <input
            value={picture}
            type="file"
            onChange={(event) => {
              setPicture(event.target.files);
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
          <input
            value={description}
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
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
        {/* <input type="submit">Ajouter</input> */}
      </form>
    </div>
  );
};
export default Publish;
