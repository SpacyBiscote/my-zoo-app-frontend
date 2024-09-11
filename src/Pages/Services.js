
import React from 'react';
import { useState , useEffect} from 'react';
import '../Styles/Services.css';

export default function Services() {

  const [responsereq , setResponsereq] = useState(null);

   async function requête1() {
    try{
      const responserequete1 = await fetch("http://localhost:8082/3000/Services" , 
        {credentials : "include" , method :"get" , headers: {'Content-Type': 'application/json'}});
      const responserequete1json = await responserequete1.json();
      setResponsereq(responserequete1json)
      console.log(responserequete1json); //transfo 
    }catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    requête1();
  } ,[]);

  if(!responsereq){
   return <div>Chargememnt des données</div>
  }
    return (
      <div className="service-container">
        <h1>Nos services </h1>
        <div className="service-container-1">
          {responsereq.map((service, index) => (
            <div key={index}  className="service-container-2">
              <img src={service.image_service} className="service-image"/>
              <h2 className="service-h2">{service.nom}</h2>
              <p className="service-p">{service.description}</p>
            </div>
              ))}
        </div>
        <footer className="footer-contact">
          <div footer-contact-1>
           <h3>Arcadia</h3>
             <p>123 Rue des Animaux, 75000 Paris, France</p>
             <p>Téléphone : <a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
             <p><strong>Email :</strong> <a href="mailto:contact@Arcadia.fr">contact@Arcadia.fr</a></p>
          </div>
          <div>
            <h4>Horaires d'ouverture :</h4>
            <p>Lundi - Vendredi : 9h00 - 18h00</p>
             <p>Samedi - Dimanche : 10h00 - 19h00</p>
          </div>
        <div>
         <p>&copy; 2024 Arcadia. Tous droits réservés.</p>
        </div>
   
     </footer>
      </div>
     );
  }
 
