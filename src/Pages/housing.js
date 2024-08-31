
import React from 'react';
import '../Styles/Habitat.css';
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

export default function Housing() {
  const [click1 , setClick1] = useState(false);
  const [click2 , setClick2] = useState(false);

   const handleClick1 = () => {
       setClick1(prevState => !prevState) 
   
   }

   const handleClick2 = () => {
       setClick2(prevState => !prevState) 
   
   }
  return (
    <div className="habitat-container">
    <h2>Nos habitats</h2>
    <div className="présentation-1">
    <img src="image2.jpg" alt="image2"className="image-2-h"/>
    <p className="pexample">
      Notre zoo Arcadia, fondé en 1985, est né de la passion pour la conservation de 
      la faune et la flore. C'est un sanctuaire pour les espèces menacées. 
      En 2005, il est devenu entièrement autonome en énergie grâce aux 
      technologies renouvelables. Aujourd'hui, il incarne
      notre engagement envers la conservation et l'éducation écologique.
    </p>
    <button onClick={handleClick1} className="button-h"><img alt="image8" src="image8.png"className="image8"/></button>
    {click1  && (
        <div className="ouverture-présentation1">
            <p>Texte supplémentaire sur les habitats et les animaux.</p>
        </div>
    )}
    </div>
    <div className="présentation-2">
            <img src="image1.jpg" alt="image1" className="image-1-h"/>
                <p>
                Abritant une diversité d'animaux comme les singes, les oiseaux exotiques 
                et les reptiles, cet habitat est une représentation vivante des forêts tropicales du monde. 
                Des plantes luxuriantes et une atmosphère humide créent un écosystème riche et vibrant.
                </p>
                <button onClick={handleClick2} className="button-h"><img alt="image8" src="image8.png"className="image8"/></button>
                {click2  && (
                <div>
                    <p>Texte supplémentaire sur les habitats et les animaux.</p>
                </div>
                 )}
            </div>
             
        </div>
            
    )
    
};