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



  // États pour ajouter un animal
 const [imageajoutanimal, setImageajoutanimal] = useState('');
 const [nomajoutanimal, setNomajoutanimal] = useState('');
 const [disposeajoutanimal, setDisposeajoutanimal] = useState('');
 const [habitatajoutanimal, setHabitatajoutanimal] = useState('');

 // États pour supprimer un animal
 const [supprimanimal, setSupprimanimal] = useState('');

 // États pour modifier un animal
 const [imagemodifanimal, setImagemodifanimal] = useState('');
 const [nommodifanimal, setNommodifanimal] = useState('');
 const [disposemodifanimal, setDisposemodifanimal] = useState('');
 const [habitatmodifanimal, setHabitatmodifanimal] = useState('');
 const [anciennomanimal, setAnciennomanimal] = useState('');


 const handlerChangerimageajoutanimal = (event) => { setImageajoutanimal(event.target.value); }
 const handleChangenomajoutanimal = (event) => { setNomajoutanimal(event.target.value); }
 const handleChangenomdisposeajoutanimal = (event) => { setDisposeajoutanimal(event.target.value); }
 const handleChangerhabitatajoutanimal = (event) => { setHabitatajoutanimal(event.target.value); }

// Supprimer un animal
 const handleChangersupprimanimal = (event) => { setSupprimanimal(event.target.value); }

// Modifier un animal
 const handlerChangerimageModifanimal = (event) => { setImagemodifanimal(event.target.value); }
 const handleChangenommodifanimal = (event) => { setNommodifanimal(event.target.value); }
 const handleChangenomdisposemodifanimal = (event) => { setDisposemodifanimal(event.target.value); }
 const handleChangerhabitatmodifanimal = (event) => { setHabitatmodifanimal(event.target.value); }
 const handleChangeranciennomanimal = (event) => { setAnciennomanimal(event.target.value); }


 async function Ajoutaniaml() {
  try {
    const reponseAjoutanimal = await fetch("http://localhost:8082/3000/Admins/animaux", {
      credentials: "include", method: "post", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({imageajoutanimal: imageajoutanimal, nomajoutanimal: nomajoutanimal, disposeajoutanimal:disposeajoutanimal,habitatajoutanimal: habitatajoutanimal }),
    });
    const jsonreponseAjoutanimal = await reponseAjoutanimal.json();
  } catch (error) {
    console.error(error);
  }
}


async function Suppranimal() {
  try {
    const responseSuppranimal = await fetch("http://localhost:8082/3000/Admins/animaux", {credentials: "include",method: "delete", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ supprimanimal: supprimanimal }),});
    const jsonresponseSuppranimal = await responseSuppranimal.json();
  } catch (error) {
    console.error(error);
  }
}

async function Modifanimal() {
  try {
    const reponseModifanimal = await fetch("http://localhost:8082/3000/Admins/animaux", { credentials: "include", method: "put",headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({imagemodifanimal: imagemodifanimal,nommodifanimal:nommodifanimal ,disposemodifanimal:disposemodifanimal, habitatmodifanimal:habitatmodifanimal, anciennomanimal:anciennomanimal}),
    });
    const jsonreponseModifanimal = await reponseModifanimal.json();
  } catch (error) {
    console.error(error);
  }
}

//Création de profil utilisateur 



 const [emailajoutuser, setEmailajoutuser] = useState('');
 const [passwordajoutuser, setPasswordajoutuser] = useState('');
 const [roleuser,setRoleuser] =useState('');

 const handlerChangeremailajoutuser = (event) => { setEmailajoutuser(event.target.value); }
 const handleChangerpasswordajoutuser= (event) => { setPasswordajoutuser(event.target.value); }
 const handleChangerroleuser =(event) => {setRoleuser(event.target.value);}

 async function ajoutUser() {
  try{
    const reponseajoutuser = await fetch("http://localhost:8082/3000/Admins/users" ,{ credentials: "include", method: "post",headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({emailajoutuser : emailajoutuser , passwordajoutuser:passwordajoutuser, roleuser :roleuser}),
   });
   const jsonreponseajoutuser = await reponseajoutuser.json();
   console.log(jsonreponseajoutuser);
  } catch(error) {
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
 <h3>Onglet Animaux</h3>

<div className="animal-onglet">

  <div className="animal-onglet1">
    <form className="formclass" onSubmit={(event) => { event.preventDefault();  Ajoutaniaml(); }}>
      <label htmlFor="image">Image URL</label>
      <textarea value={imageajoutanimal} onChange={handlerChangerimageajoutanimal} id="imageajoutanimal" />
      <label htmlFor="nom">Nom</label>
      <input value={nomajoutanimal} onChange={handleChangenomajoutanimal} id="nomajoutanimal" />
      <label htmlFor="dispose">Race ID</label>
      <input value={disposeajoutanimal} onChange={handleChangenomdisposeajoutanimal} id="disposeajoutanimal" />
      <label htmlFor="habitat">Habitat ID</label>
      <input value={habitatajoutanimal} onChange={handleChangerhabitatajoutanimal} id="habitatajoutanimal" />
      <button type="submit">Ajouter</button>
    </form>
  </div>

  
   <div className="animal-onglet2">
    <form className="formclass" onSubmit={(event) => { event.preventDefault(); Suppranimal(); }}>
      <label htmlFor="nom">Nom de l'animal à supprimer</label>
      <input value={supprimanimal} onChange={handleChangersupprimanimal} id="supprimanimal" />
      <button type="submit">Supprimer</button>
    </form>
  </div>

  <div className="animal-onglet3">
    <form className="formclass" onSubmit={(event) => { event.preventDefault(); Modifanimal(); }}>
      <label htmlFor="anciennom">Nom actuel de l'animal à modifier</label>
      <input value={anciennomanimal} onChange={handleChangeranciennomanimal} id="anciennomanimal" />
      <label htmlFor="nom">Nouveau nom de l'animal</label>
      <input value={nommodifanimal} onChange={handleChangenommodifanimal} id="nommodifanimal" />
      <label htmlFor="image">Image URL</label>
      <textarea value={imagemodifanimal} onChange={handlerChangerimageModifanimal} id="imagemodifanimal" />
      <label htmlFor="dispose">Race ID</label>
      <input value={disposemodifanimal} onChange={handleChangenomdisposemodifanimal} id="disposemodifanimal" />
      <label htmlFor="habitat">Habitat ID</label>
      <input value={habitatmodifanimal} onChange={handleChangerhabitatmodifanimal} id="habitatsmodifanimal" />
      <button type="submit">Modifier</button>
    </form>
  </div>
</div>
<h3>Création de profil utilisateur</h3>
<div className="CreationUser">
<form className="formclass" onSubmit={(event) => { event.preventDefault(); ajoutUser(); }}>
  <label htmlFor="emailajoutuser">email de l'utilisateur potentiel </label>
  <input value={emailajoutuser} onChange={handlerChangeremailajoutuser} id="emailajoutuser"/> 
  <label htmlFor="passwordajoutuser">Mot de passe de l'utilisateur potentiel</label>
  <input value={passwordajoutuser} onChange={handleChangerpasswordajoutuser} id="passwordajoutuser"/>
  <label>Rôle de l'utilisateur potentiel</label>
  <input value={roleuser} onChange={handleChangerroleuser} id="roleuser"/>
  <button type="submit">Ajouter l'utilisateur</button>
</form>
<p className="rolId">Pour le rôle de l'utilisateur:</p>
<ul className="RoleIdul">
  <li>2 pour un vétérinaire</li>
  <li>3 pour un employé</li>
</ul>
</div>

</div>
  )
}