import React from 'react';
import '../Styles/Habitat.css';
import { useState, useEffect } from "react";
import { click } from "@testing-library/user-event/dist/click";


export default function Housing() {
   
  //Recuperer les données Habitat
  const [responsegetHabitat , setResponsegetHabitat] = useState(null);
  const [responsegetanimaux ,  setResponsegetanimaux] = useState(null)
  const [shownanimal, setShownanimal] = useState({});


  async function  gethabitat() {
    try {
        const getHabitat1 = await fetch("http://localhost:8082/3000/Housing" ,
        {credentials : "include" , method : "get" , headers: {'Content-Type': 'application/json'}});
        const getHabitat1json = await getHabitat1.json();
        setResponsegetHabitat(getHabitat1json);
    }catch (error){
        console.error(error);
    }
  }
  
  useEffect(()=>{
    gethabitat();
  },[])


  

  //Fonction pour le  premier bouton
  const shownAnimalgg = () => {
    return <p>Les animaux</p>;
  };
  

 /* const clickHabitat = (index) => {
    setShownanimal(index);
  }*/


  //récupérer les données d'animaux 

  async function  getanimaux(habitatId) {
    try {
        const getAnimaux1 = await fetch("http://localhost:8082/3000/Housing/${habitatId}/animal" ,
        {credentials : "include" , method : "get" , headers: {'Content-Type': 'application/json'}});
        const getAnimaux1json = await getAnimaux1.json();
        setShownanimal(prev => ({ ...prev, [habitatId]: getAnimaux1json }));
    }catch (error){
        console.error(error);
    }
  }

  

  const clickHabitat = async (index, habitatId) => {
    if (!shownanimal[habitatId]) {
      await getanimaux(habitatId); 
    }
  };

    //  <button className="button-habitat" onClick={() => clickHabitat(index)}>En savoir plus </button>
      //  {shownanimal === index && shownAnimalgg()}

  if(!responsegetHabitat){
    return <p>Les données sont en cours de chargemement</p>
  }
  return (
    <div className="habitat-container">
        <h1>Nos habitats</h1>
        <div className="habitat-container-1"></div>
        {responsegetHabitat.map((habitat, index) => (
             <div key={index} className="habitat-container-2">
              <h2>{habitat.nom}</h2>
              <img src={habitat.image_habitat} className="image-habitat"/>
              <p>{habitat.description}</p>
              <button className="button-habitat" onClick={() => clickHabitat(habitat.id)}>En savoir plus</button>
               {shownanimal[habitat.id] && (
                <div>
                  <h3>Les animaux :</h3>
                  <ul>
                  {shownanimal[habitat.id].map((animal, i) => (
                  <li key={i}>
                    {animal.prenom} <img src={animal.animal_image} alt={animal.prenom} />
                  </li>
                ))}
              </ul>
            </div>
          )}
              
             </div>
        ))}
     
             
    </div>
            
    )
    
};