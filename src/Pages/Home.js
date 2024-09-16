import React from 'react';
import '../Styles/Home.css'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();

    const redirectToHabitat = () => {
      const condition = true; 
      
      if (condition) {
        navigate('/Housing');
      } else {
        alert('Il y a un problème, ce n\'est pas vous mais nous.');
      }
    };

    const redirectToService = () => {
      const condition = true; 
      
      if (condition) {
        navigate('/Service');
      } else {
        alert('Il y a un problème, ce n\'est pas vous mais nous.');
      }
    };
    

    const [pseudo , setPseudo] = useState("");
    const [avis , setAvis] = useState("");

    const handleChangerpseudo = (event) => {
      setPseudo(event.target.value);
    }

    const handleChangeravistext = (event) => {
      setAvis(event.target.value);
    }
    

    async function fetchavis() {
      try{
        const responseauth = await fetch("http://localhost:8082/3000" , 
          {credentials : "include" , method :"post" , headers: {
            'Content-Type': 'application/json'}, body: JSON.stringify({ pseudo: pseudo, avis: avis }), }); 
        const responsejson = await responseauth.json();
        console.log(responsejson);

      } catch(error) {
        console.error(error);
      }
    }
    
  return (
    <div className='home-container'>
      <div className="background-image"></div>
      <div className='title1'>
      <h1>Notre histoire</h1>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWklEQVR4nO2Yb2wTZRzHH974X+/Wkd5BlN6NgTpQoF3vEF1Lq5mGYDSGMfFum0DvIZuS4LotsFbajpjIC018qUuEPk8IivhOZ8wMYeuF+EKN8YUQTNQsJm6KGJ0ZMoOPues6uz9tn2t7W0n6TX6v7/v5/XueewCoqqqqilLdGciIGCK3nkCeL2J3gJtJazB0C0gbEzEkHj1hxJdb9NhqcDNISB54RsTwL8N8FgDxpBI/eEdj60Elqy4JnxOQ9k/G/BwAPUHcqfj45vMD60AlSkiGnhSw9ne2+fkAJoQeH2scOXYfqCSJWPOKGF6bb34xgHQ7xb/Zph+/G1SCXCc6WBHD7xcznxPAjPj7oBIkYO3DXObzAxiVGGhfVvMuFHoxn/mCAHpi0qMfW7tsB5WA4HiJAMZ6/XRZAAQEY4XMUwGYEWteUvMNZ7ruErF2pWwAqfiFJQUQ0YH9NObpK5AgW/TEI9nfuPeVrbczrwYDbCQQZaJBxEQDKSYaGGOjwatsJPg7Gw0SNhL4jYkEvmWjgWE2EnxzZa+viRJAGyk3gCcVHwQArLgnEmhmo4H3mEhw0jRJGTV927/iFOlsQfOrky/Vili7UfYKjMSmmLDvEnN4O7VpNmO+x3+ZV2XCK/LXFNmHLbTmLVVATxDutZ2E6fNbMu/o9Y+Z5lWZcIr0U0EAAWlv2AUgvN1OmF6flcxPZMzPxB80FRiyC+D+012E6fEZw1nYfNj/JzfXvNFC04UrgOF3dgE8NNRHmHATYfvzA9T0+KcWmDdDmixcAcr9XwzA5s8iaYAjuQfZ0e2bXmg8MwPyFYoZgNftAnCPxvICOLr9NxbP/AyAKv1YsQC13b5/cxnPinOV0ULzZsAR9pN8mc+agUGKCmiX7QLY+HHvgi1U2+2jMD47A4dpWugj+9Zo55xzwEGd+XQ4Fe/jFC0Ej9t3kLXNnsRWMs+bAyxf59SH7ywMgODTdgE4B3YQ4y5k1Tyf3kBDgPZfYLHnk1IBNg33m/3vOOSz1Db8/xXYC2glYHi23ADiOx3E8fKjlo3z6exfXQU99O+vAobN5QQw9v/KcJA493iLA1DkOLAkAlaIGH5eLoD6wb3EubuR8IpkHUCRJmr3bbP+SCYmtSfKAWAcXpy6lXDPF5n9F+RWy+ZnITBEpQK4+ncSrrW47HOqfBKUojWnOmtEpF0qFmDdW+3E2eIhXBG9z6nyaP3Bp24tCcCEQCFRwPAXqwAbcBfhdnuKbZ1zro5NLCiXRBxqEpE2RQuw8YNDxt/TTOtYHtp3G1oabgHlloCgLGBtohDAhtMHCb9HKqLvpXFekXYBO7UW7a8XEbyYC+CBwRBxtnotmedU+VdelaM1LR4GLIVcJzpuE7H2eubtyDyozh8lwtFniXOXm65tFHmaU6RP+DapjeqCZofqkrBRwHD4QdRJVu17jDjnDSynSNd4Rf6ZU6WLvCJf4FX5FKdKR4wrsaVrQVVVVQXy6T8CdRuY7AiTvgAAAABJRU5ErkJggg==" className='logo1' alt='logo1'>
      </img>
      </div>
     
        <div className="presentation1-item">
            <img src="image2.jpg" alt="image2"className="image2"/>
            <p className="presentation1-text">
              Notre zoo Arcadia, fondé en 1985, est né de la passion pour la conservation de 
              la faune et la flore. C'est un sanctuaire pour les espèces menacées. 
              En 2005, il est devenu entièrement autonome en énergie grâce aux 
              technologies renouvelables. Aujourd'hui, il incarne
              notre engagement envers la conservation et l'éducation écologique.
              Vous pourrez découvrir des espaces recrée que l'on retrouve dans
              la nature en passant par la savane jusqu'au espaces marin et le 
              tout développé avec des énergies vertes. Plongez dans le monde d'Arcadia.
            </p>
           </div>
           
           <h1>Nos habitats</h1>
           
           <div className="habitat-1-item">
             <div className="soushabitat1-item">
                <img src="image3.jpg" alt="image1" className="image1"/>
                <h3>Plaine ouverte d'Afrique </h3>
                <p>
                Découvrez les plaines africaines recréées, où lions et autres animaux vivent ensemble comme dans leur habitat naturel, offrant un aperçu authentique de la savane.  
                </p>
             </div>
             <div className="soushabitat2-item">
                <img src="image1.jpg" alt="image1" className="image1"/>
                <h3>Forêts Tropicale</h3>
                <p>
                Entrez dans une reconstitution vivante des forêts tropicales, peuplée de singes, d'oiseaux exotiques et de reptiles, dans un environnement luxuriant et humide.
                </p>
            </div>   
              <div className="soushabitat3-item">
                <img src='image4.JPG' className='image4'alt='image4'/>
                <h3>Désert </h3>
                <p className="p4">
                 Explorez un désert recréé, où des espèces fascinantes montrent leurs adaptations à des conditions de vie extrêmes et à un environnement aride.
                </p>
              </div>

           </div>
          
           
           
           <button className='Bouton1' onClick={redirectToHabitat}>
             En savoir plus sur les habitats
           </button>

           <h1>Nos services</h1>
          <div className="services-cont">
           
            <div className="services-cont1">
              <img src='service1.jpg' className="service-img1"/>
              <h3>Restauration</h3>
              </div>

              <div className="services-cont2">
               <img src='service2.jpg' className="service-img2"/>
               <h3>Visite avec guide</h3>
              </div>

              <div className="services-cont3">
               <img src='service3.jpg' className="service-img3"/>
               <h3>Visite avec train</h3>
              </div>
              
          </div>
          <button className='Bouton1' onClick={redirectToService}>
             En savoir plus sur les services
           </button>
           <h1>Votre avis nous intéresse</h1>
           <div className="avisform-container">
           <form className="avisform" onSubmit={(event) => { event.preventDefault(); fetchavis(); }}>
            <label htmlFor="pseudo">Pseudo</label>
            <input  value={pseudo} placeholder="Julien"  onChange={handleChangerpseudo} id="pseudo"/>
            <label htmlFor="avis-text"></label>
            <textarea rows={15} value={avis} onChange={handleChangeravistext} placeholder="Votre avis..." id="avis"/>
            <button className="form-register" type="submit">Envoyé votre avis</button>
           </form>
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
};