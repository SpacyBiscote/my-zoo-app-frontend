import React from 'react';
import { useState  } from 'react';
import { useNavigate  } from "react-router-dom";
import '../Styles/Connexion.css';

const Connexion = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();


    const handleEmailChanger = (event) => {
        setEmail(event.target.value);
    
    }
    const handlePasswordChanger = (event) => {
        setPassword(event.target.value);
    
    }

      async function fetchauth() {
        try{
          const responseauth = await fetch("http://localhost:8082/3000/Connexion" , 
            {credentials : "include" , method :"post" , headers: {
              'Content-Type': 'application/json'}, body: JSON.stringify({ email: email, password: password }), }); // le credentials ave le include pour envoie de requete origine différente
          const responsejson = await responseauth.json();
          console.log(responsejson);

          if (responsejson) {
            localStorage.setItem('token', responsejson);
            navigate("/admin");
          } else {
            console.log("Erreur de connexion");
          }

        } 
          catch(error) {
          console.error(error);
        }
      }




  return (
    <div className="form-container-inital">
       <div className='form-container'>
        <img src='ecology.jpg' alt='ecology' className='ecologyconnexion'/>
        <form className="formclass"  onSubmit={(event) => { event.preventDefault(); fetchauth(); }}>
            <label htmlFor="email">Email</label>
                <input  value={email} onChange={handleEmailChanger} placeholder="youremail@example.com" id="email" name="email"/>
            <label htmlFor="Password">Password</label>
                <input  value={password}  onChange={handlePasswordChanger} placeholder="*********"id="Password" name="password"/>
            <button className="form-register" type="submit">Se connecter</button>
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
  
   
  )
}

export default Connexion 