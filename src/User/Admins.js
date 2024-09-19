import React, { useState } from 'react';

import '../Styles/Admins.css'

export default function Admins() {
    //Tous les states pour les forms

     //state pour les ajout service
     const [imageajoutservice , setImageajoutservice] = useState('');
     const [nomajoutservice , setNomajoutservice] = useState('');
     const [descriptionajoutservice , setDescriptionajoutservice] = useState('');
     //suprimmer servive
     const [supprimservice , setSupprimservice] = useState('');

     //modifier un service
     const [imagemodifservice , setImagemodifservice] = useState('');
     const [nommodifservice , setNommodifservice] = useState('');
     const [descriptionmodifservice , setDescriptionmodifservice] = useState('');
     const [anciennom, setAnciennom] = useState('');


     //ajouter état service
     const handlerChangerimageajservice = (event) => {setImageajoutservice(event.target.value);}
     const handleChangernomajoutservice = (event) => {setNomajoutservice(event.target.value);}
     const handleChangerdescriptionajoutservice = (event) => {setDescriptionajoutservice(event.target.value);}

     //supprimer état service
     const handleChangersupprimmservice = (event) => {setSupprimservice(event.target.value);}
      
     //modif état service 
     const handlerChangerimagemoservice = (event) => {setImagemodifservice(event.target.value);}
    const handleChangernommodifservice = (event) => {setNommodifservice(event.target.value);}
    const handleChangerdescriptionmodifservice = (event) => {setDescriptionmodifservice(event.target.value);}
    const handleChangeranciennom = (event) => {setAnciennom(event.target.value);}

     //fetch pour ajouter un servic
    async function Ajoutservice() {
      try{
        const reponseAjoutservice = await fetch("http://localhost:8082/3000/Admins/service" , 
          {credentials : "include" ,  method : "post" , headers :  { 'Content-Type': 'application/json'} , 
          body : JSON.stringify({imageajoutservice : imageajoutservice , nomajoutservice : nomajoutservice , descriptionajoutservice : descriptionajoutservice }),})
        const jsonreponseAjoutservice = await reponseAjoutservice.json();
     
      } catch(error) {
        console.error(error)
      }
    }
   //fetch pour supprimer un service 
   async function Supprservice() {
    try{
      const responsesupprservice = await fetch("http://localhost:8082/3000/Admins/service" , 
        {credentials : "include" ,  method : "delete" , headers :  { 'Content-Type': 'application/json'},
        body : JSON.stringify({ supprimservice: supprimservice }), })
        const jsonresponsesupprservice = await responsesupprservice.json();
    } catch(error) {
      console.error(error)
    } 
   }

   async function Modifservice() {
    try{
      const reponseModifservice = await fetch("http://localhost:8082/3000/Admins/service" , 
        {credentials : "include" ,  method : "put" , headers :  { 'Content-Type': 'application/json'} , 
        body : JSON.stringify({imagemodifservice : imagemodifservice, nommodifservice : nommodifservice , descriptionmodifservice : descriptionmodifservice,   anciennom: anciennom }),})
        const jsonreponseModifservice = await reponseModifservice.json();
   
    } catch(error) {
      console.error(error)
    }
  }

//maintenant pour les habitats

const [imageajouthabitat, setImageajouthabitat] = useState('');
const [nomajouthabitat, setNomajouthabitat] = useState('');
const [descriptionajouthabitat, setDescriptionajouthabitat] = useState('');
const [supprimhabitat, setSupprimhabitat] = useState('');
const [imagemodifhabitat, setImagemodifhabitat] = useState('');
const [nommodifhabitat, setNommodifhabitat] = useState('');
const [descriptionmodifhabitat, setDescriptionmodifhabitat] = useState('');
const [anciennomhabitat, setAnciennomhabitat] = useState('');


// Ajouter habitat
const handlerChangerimageajouthabitat = (event) => { setImageajouthabitat(event.target.value); }
const handleChangernomajouthabitat = (event) => { setNomajouthabitat(event.target.value); }
const handleChangerdescriptionajouthabitat = (event) => { setDescriptionajouthabitat(event.target.value); }

// Supprimer habitat
const handleChangersupprimhabitat = (event) => { setSupprimhabitat(event.target.value); }

// Modifier habitat
const handlerChangerimageModifhabitat = (event) => { setImagemodifhabitat(event.target.value); }
const handleChangernommodifhabitat = (event) => { setNommodifhabitat(event.target.value); }
const handleChangerdescriptionmodifhabitat = (event) => { setDescriptionmodifhabitat(event.target.value); }
const handleChangeranciennomhabitat = (event) => { setAnciennomhabitat(event.target.value); }


async function Ajouthabitat() {
  try {
    const reponseAjouthabitat = await fetch("http://localhost:8082/3000/Admins/habitat", {
      credentials: "include", method: "post", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({imageajouthabitat: imageajouthabitat,nomajouthabitat: nomajouthabitat,descriptionajouthabitat: descriptionajouthabitat }),
    });
    const jsonreponseAjouthabitat = await reponseAjouthabitat.json();
  } catch (error) {
    console.error(error);
  }
}

async function Supprhabitat() {
  try {
    const responseSupprhabitat = await fetch("http://localhost:8082/3000/Admins/habitat", {credentials: "include",method: "delete", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ supprimhabitat: supprimhabitat }),});
    const jsonresponseSupprhabitat = await responseSupprhabitat.json();
  } catch (error) {
    console.error(error);
  }
}

async function Modifhabitat() {
  try {
    const reponseModifhabitat = await fetch("http://localhost:8082/3000/Admins/habitat", { credentials: "include", method: "put",headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({imagemodifhabitat: imagemodifhabitat,nommodifhabitat: nommodifhabitat,descriptionmodifhabitat: descriptionmodifhabitat,anciennomhabitat: anciennomhabitat}),
    });
    const jsonreponseModifhabitat = await reponseModifhabitat.json();
  } catch (error) {
    console.error(error);
  }
}
  return (
    <div className="Container-Admins">
        <h1>Vous êtes connecté en tant qu'admin</h1>
        <h3> Onglet service </h3>
        <div className="service-onglet">
        <div className="service-onglet1">
        <form className="formclass" onSubmit={(event) => {event.preventDefault(); Ajoutservice();}}>
            <label htmlFor="image">Image URL</label>
            <textarea value={imageajoutservice} onChange={handlerChangerimageajservice} id="imageajoutservice"/>
            <label htmlFor="nom">Nom</label>
            <input value={nomajoutservice} onChange={handleChangernomajoutservice} id="nomajoutservice"/>
            <label htmlFor="description">Description</label>
            <input value={descriptionajoutservice} onChange={handleChangerdescriptionajoutservice} id="descriptionajoutservice"/>
            <button type="submit">Ajouter</button>
        </form>
        </div>
       
        <div className="service-onglet2">
        <form className="formclass"onSubmit={(event) => {event.preventDefault(); Supprservice();}}>
        <label htmlFor="nom">Nom du service à supprimer</label>
        <input value={supprimservice} onChange={handleChangersupprimmservice} id="supprimservice"/>
        <button type="submit">Supprimer</button>
        </form>
        </div>
        
        <div className="service-onglet3">
        <form className="formclass" onSubmit={(event) => {event.preventDefault(); Modifservice();}}>
            <label htmlFor="anciennom">Nom actuel du service à modifier</label>
            <input value={anciennom} onChange={handleChangeranciennom} id="anciennom" />
            <label htmlFor="nom">Nouveau nom du service</label>
            <input value={nommodifservice} onChange={handleChangernommodifservice} id="nommodifservice"/>
            <label htmlFor="image">Image URL</label>
            <textarea value={imagemodifservice} onChange={handlerChangerimagemoservice} id="imagemodifservice"/>
            <label htmlFor="description">Description</label>
            <input value={descriptionmodifservice} onChange={handleChangerdescriptionmodifservice} id="descriptionmodifservice"/>
            <button type="submit">Modifier</button>
        </form>
        </div>
        </div>
     <h3>Onglet Habitat</h3>
    <div className="habitat-onglet">
    <div className="habitat-onglet1">
      <form className="formclass" onSubmit={(event) => { event.preventDefault(); Ajouthabitat(); }}>
      <label htmlFor="image">Image URL</label>
      <textarea value={imageajouthabitat} onChange={handlerChangerimageajouthabitat} id="imageajouthabitat" />
      <label htmlFor="nom">Nom</label>
       <input value={nomajouthabitat} onChange={handleChangernomajouthabitat} id="nomajouthabitat" />
       <label htmlFor="description">Description</label>
      <input value={descriptionajouthabitat} onChange={handleChangerdescriptionajouthabitat} id="descriptionajouthabitat" />
      <button type="submit">Ajouter</button>
      </form>
    </div>


    <div className="habitat-onglet2">
     <form className="formclass" onSubmit={(event) => { event.preventDefault(); Supprhabitat(); }}>
     <label htmlFor="nom">Nom du habitat à supprimer</label>
     <input value={supprimhabitat} onChange={handleChangersupprimhabitat} id="supprimhabitat" />
     <button type="submit">Supprimer</button>
     </form>
    </div>


    <div className="habitat-onglet3">
     <form className="formclass" onSubmit={(event) => { event.preventDefault(); Modifhabitat(); }}>
     <label htmlFor="anciennom">Nom actuel du habitat à modifier</label>
     <input value={anciennomhabitat} onChange={handleChangeranciennomhabitat} id="anciennomhabitat" />
     <label htmlFor="nom">Nouveau nom du habitat</label>
     <input value={nommodifhabitat} onChange={handleChangernommodifhabitat} id="nommodifhabitat" />
     <label htmlFor="image">Image URL</label>
     <textarea value={imagemodifhabitat} onChange={handlerChangerimageModifhabitat} id="imagemodifhabitat" />
     <label htmlFor="description">Description</label>
     <input value={descriptionmodifhabitat} onChange={handleChangerdescriptionmodifhabitat} id="descriptionmodifhabitat" />
     <button type="submit">Modifier</button>
   </form>
    </div>
       
 </div>
  
       
</div>
  )
}