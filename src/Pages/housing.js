import React from 'react';
import '../Styles/Habitat.css';
import { useState, useEffect } from "react";
import { click } from "@testing-library/user-event/dist/click";
const speciesMap = {
 
  2: 'Camelus dromedarius',
  3: 'Vulpes zerda',
  4: 'Ailurus fulgens',
  5: 'Nomascus gabirellae',
  6: 'Panthera pardus pardus',
  7: 'Gazella dorcas'
  
};



export default function Housing() {
   
  //Recuperer les données Habitat
  const [responsegetHabitat , setResponsegetHabitat] = useState(null);
  const [responsegetanimaux ,  setResponsegetanimaux] = useState(null)
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const [shownHabitats, setShownHabitats] = useState({});


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




  //récupérer les données d'animaux 
async function getAnimaux() {
  try {
    const getaniamux1 = await fetch("http://localhost:8082/3000/Housing/animaux" , 
    {credentials : "include" , method : "get" , headers: {'Content-Type': 'application/json'}});
    const getanimauxjson = await getaniamux1.json();
    setResponsegetanimaux(getanimauxjson);
    console.log(getanimauxjson);
  }catch(error) {
    console.error(error)
  }
}

useEffect(()=>{
  getAnimaux();
},[])


//Fonction pour le  premier bouton
  
const filterAnimauxByHabitat = (habitatId) => {
  if (!responsegetanimaux) return [];
  return responsegetanimaux.filter(animal => animal.detient === habitatId);
}


const toggleShowAnimals = (habitatId) => {
  setShownHabitats(prevState => ({
    ...prevState,
    [habitatId]: !prevState[habitatId]  // On inverse l'état actuel de l'habitat sélectionné
  }));
};

/*() => setSelectedHabitat(habitat.id)*/ //pour le bouton
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
              <button className="button-habitat"  onClick={() => toggleShowAnimals(habitat.id)}>En savoir plus</button>
               

            {shownHabitats[habitat.id] && (
            <div className="animaux-container">
              <h3>Animaux dans cet habitat :</h3>
              {filterAnimauxByHabitat(habitat.habitat_id).length > 0 ? (
                filterAnimauxByHabitat(habitat.habitat_id).map((animal, index) => (
                  <div key={index} className="animal-info">
                   
                    <img src={animal.animal_image} alt={animal.prenom} className="animal-image" />
                    <p>Nom: {animal.prenom}</p>
                    <p>Race: {speciesMap[animal.dispose]}</p>


                 
                  </div>
                ))
              ) : (
                <p>Aucun animal dans cet habitat pour le moment.</p>
              )}
            </div>
          )}
              
             </div>
        ))}
     
             
    </div>
            
    )
    
};

