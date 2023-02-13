import { useState } from "react";
import axios from "axios";

const publish = () => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [price,setPrice]=useState("")
  const [condition,setCondition]=useState("")
  const [city,setCity]=useState("")
  const [brand,setBrand]=useState("")
  const [size,setSize]=useState("")
  const [color,setColor]=useState("")
  const [picture,setPicture]=useState("")


  return( <div className="publication">
             <form onSubmit={async (event)=>{
                 event.preventDefault();
                 try{
                     const formData=new FormData();

                     formData.append("title", title)
                        formData.append("description",description )
                        formData.append("price", price)
                        formData.append("condition",condition )
                        formData.append("city", city)
                        formData.append("brand",brand )
                        formData.append("size",size )
                        formData.append("color",color )
                        formData.append("picture",picture )

                     const response=await axios.post("https://lereacteur-vinted-api.herokuapp.com/offer/publish",)

                     }



                 }}



            </div>)
 
};
export default publish;
