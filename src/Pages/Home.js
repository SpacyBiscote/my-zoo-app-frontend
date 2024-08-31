import React from 'react';
import '../Styles/Home.css'; 
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

    const redirectToHabitat = () => {
      const condition = true; // Vous pouvez ajuster votre condition ici
      
      if (condition) {
        navigate('/Housing');
      } else {
        alert('Il y a un problème, ce n\'est pas vous mais nous.');
      }
    };
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
                    Ce vaste habitat recrée les plaines ouvertes de l'Afrique, 
                    où les lions et autres animaux cohabitent dans un environnement qui reflète leur habitat naturel. 
                    Les visiteurs peuvent observer les interactions entre ces espèces 
                    emblématiques dans un cadre similaire à celui de la savane.
                </p>
             </div>
             <div className="soushabitat2-item">
                <img src="image1.jpg" alt="image1" className="image1"/>
                <h3>Forêts Tropicale</h3>
                <p>
                Abritant une diversité d'animaux comme les singes, les oiseaux exotiques 
                et les reptiles, cet habitat est une représentation vivante des forêts tropicales du monde. 
                Des plantes luxuriantes et une atmosphère humide créent un écosystème riche et vibrant.
                </p>
            </div>   
              <div className="soushabitat3-item">
                <img src='image4.JPG' className='image4'alt='image4'/>
                <h3>Désert </h3>
                <p className="p4">
                Cet habitat désertique recrée les vastes étendues arides où les conditions climatiques extrêmes dominent. 
                Ici, les visiteurs peuvent découvrir des espèces fascinantes toutes adaptées à la vie dans un environnement 
                avec peu d'eau. 
                </p>
              </div>

           </div>
          
           
           
           <button className='Bouton1' onClick={redirectToHabitat}>
             En savoir plus sur les habitats
           </button>

           <h1>Nos services</h1>
        </div>
       
      
   
  );
};