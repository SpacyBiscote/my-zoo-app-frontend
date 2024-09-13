import React, { useState , useEffect } from 'react';
import '../Styles/Contact.css';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import emailjs from 'emailjs-com';





export default function Contact() {
   //pour le formulaire de contact
   const [email ,setEmail] =useState();
   const [titre , setTitre] =useState();
   const [description , setDescription]= useState();

   const handleEmailChanger2 = (event) => {
     setEmail(event.target.value);
   }
   const handleTitreChanger1 = (event) => {
    setTitre(event.target.value);
  }
  const handleDescriptionChanger1 = (event) => {
    setDescription(event.target.value);
  }


   // pour les images
   let img6 = "image6.jpg";
   let img7 = "image7.jpg";

   const [cliked , setCliked] = useState("image6.jpg") //mettre une image comme ça apres je modifie le setclicked()
   const [shown , setShown] = useState(false)

   //click sur les images à droite
   const onCLickright = () => {
    switch(cliked){
      case "image6.jpg":
         setCliked("image7.jpg");
         break;
         case "image7.jpg" :
            setCliked("image8.jpg");
            break;
            case "image8.jpg" :
               setCliked("image9.jpg");
               break;
               case "image9.jpg":
               setCliked("image6.jpg");
               break;
         default : console.log('ok');
    } 
  }
    //click pour revenir à l'image inital 
    const onClickleft =() => {
      setCliked("image6.jpg")
    }
 
    //Pour l'envoie de formulaire de contact à l'email(fictif)
  /*  const Submitcontactfrom = (event) => {
      event.preventDefault(); 

    const templateParams = {
      from_name: email,
      to_name: 'contact@Arcadia.fr', 
      subject: titre,
      message: description,
    }
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email envoyé avec succès', response);
        setEmail('');
        setTitre('');
        setDescription('');
      })
      .catch((error) => {
        console.log('Erreur lors de l\'envoi de l\'email', error);
      });
  };*/

  
  return (
   <div className="connexion-home-container">
       <div className="sous-connexion-home-container">
        <h1>Une question ? Voici un formulaire de contact</h1>
        <div className="sous-connexion-sous-home-container-1">
        <form className="form-contact" /*onSubmit={Submitcontactfrom}*/>
            <label htmlFor='titre'>Titre</label>
            <input value={titre} onChange={handleTitreChanger1}/>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={handleEmailChanger2}/>
            <label htmlFor='description'>Description</label>
            <textarea  rows={9} value={description} onChange={handleDescriptionChanger1}/>
            <button className="button-envoi-form"> Envoyer</button>
           
        </form>

        <SlArrowLeft size="24px" onClick={onClickleft} className="SIArrowleft1"/>
        <img src= {cliked}alt="image6" className="image6" ></img>
        <SlArrowRight size ="24px" onClick={onCLickright} className="SIArrowright1"/>
        </div>
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