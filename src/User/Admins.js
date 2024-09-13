import React, { useState } from 'react';

import '../Styles/Admins.css'

export default function Admins() {
    //Tous les states pour les forms
     //state pour les ajout service
     const [imageajoutservice , setImageajoutservice] = useState('');
     const [nomajoutservice , setNomajoutservice] = useState('');
     const [descriptionajoutservice , setDescriptionajoutservice] = useState('');
     
     const handlerChangerimageajservice = (event) => {
       setImageajoutservice(event.target.value);
     }
     const handleChangernomajoutservice = (event) => {
      setNomajoutservice(event.target.value);
     }
     const handleChangerdescriptionajoutservice = (event) => {
      setDescriptionajoutservice(event.target.value);
     }

    async function Ajoutservice() {
      try{
        const reponseAjoutservice = await fetch("http://localhost:8082/3000/Admins" , 
          {credentials : "include" ,  method : "post" , headers :  { 'Content-Type': 'application/json'} , 
          body : JSON.stringify({imageajoutservice : imageajoutservice , nomajoutservice : nomajoutservice , descriptionajoutservice : descriptionajoutservice }),})
        const jsonreponseAjoutservice = await reponseAjoutservice.json();
     
      } catch(error) {
        console.error(error)
      }
    }
  
//travailler ici sur un systeme qui nous permts de modif et suprimer vite 


  return (
    <div className="Container-Admins">
        <h1>Vous êtes connecté en tant qu'admin</h1>
        <h3>Modification service</h3>
        <form className="Ajout-service" onSubmit={(event) => {event.preventDefault(); Ajoutservice();}}>
            <label htmlFor="image">Image URL</label>
            <textarea value={imageajoutservice} onChange={handlerChangerimageajservice} id="imageajoutservice"/>
            <label htmlFor="nom">Nom</label>
            <input value={nomajoutservice} onChange={handleChangernomajoutservice} id="nomajoutservice"/>
            <label htmlFor="description">Description</label>
            <input value={descriptionajoutservice} onChange={handleChangerdescriptionajoutservice} id="descriptionajoutservice"/>
            <button type="submit">Ajouter</button>
        </form>
       
        <button>Modifier</button>
        <button>Supprimer</button>
    </div>
  )
}