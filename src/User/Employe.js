import React from 'react';
import { useState ,useEffect ,useContext } from 'react';
import '../Styles/Employe.css';
import { AvisContext } from '../Aviscontext';


export default function Employe() {
   const [resavis , setResavis] = useState(null);
   const { ajouterAvis } = useContext(AvisContext);

    async function recupavis() {
      try{
        const recupavis1 = await  fetch("http://localhost:8082/3000/Employe" , 
          {credentials : "include" , method :"get" , headers: {
            'Content-Type': 'application/json'},});
            const recupavis1json = await recupavis1.json();
            setResavis(recupavis1json);
            console.group(recupavis1json);
      }catch {
        <p>Nous n'avons pas pu récupérer les données. Veuillez contacter l'administrateur</p>
      }
    }

    useEffect(() => {
      recupavis();
    } ,[]);

    const handleAccepter = (avis) => {
        ajouterAvis(avis); 
      };
      const [ajoutgrammage, setAjoutgrammage] = useState('');
      const [ajoutdateheure, setAjoutdateheure] = useState('');
      const [idanimal , setIdanimal] = useState('');
      const [idanimal2 , setIdanimal2] = useState('');

      const handlerChangerajoutgrammage = (event) => { setAjoutgrammage(event.target.value); }
      const handleChangerajoutdateheure = (event) => { setAjoutdateheure(event.target.value); }
      const handleChangeridanimal =(event) => {setIdanimal(event.target.value);}  
      const handleChangeridanimal2 =(event) => {setIdanimal2(event.target.value);}  
      
      async function Ajoutemployégr() {
        try {
          const reponseAjoutemloyégr = await fetch("http://localhost:8082/3000/Employe", {
            credentials: "include", method: "put", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ajoutgrammage:ajoutgrammage, ajoutdateheure:ajoutdateheure , idanimal:idanimal ,idanimal2 :idanimal2}),
          });
          const jsonreponseAjouthabitat = await reponseAjoutemloyégr.json();
        } catch (error) {
          console.error(error);
        }
      }

  if(!resavis) {
    return <div><p>Chargement des avis</p></div>
  }
  return (
    <div className="Employe-container">
       <h1>Vous êtes connecté en tant qu'employé</h1>
       <h3>Gestion des avis</h3>
       <div>
       {resavis.map((avis, index) => (
            <div key={index}  className="avis-container-1">
              <h4 className="service-h2">{avis.pseudo}</h4>
              <p className="service-p">{avis.commentaire}</p>
              <button className="buttonaccept" onClick={() => handleAccepter(avis)}>Accepter</button>
              <button className="buttonrefus">Refuser</button>
            </div>
              ))}
       </div>
       <h3>Grammage et date/heure</h3>
       <div className="Grammage-animal">
       
        <form className="formclass" onSubmit={(event) => { event.preventDefault(); Ajoutemployégr(); }}>
        <label htmlFor="idanimal">ID de l'animal</label>
        <input value={idanimal} onChange={handleChangeridanimal} id="idanimal"/>
        <label htmlFor="ajoutgrammage">Nourriture consommé </label>
        <input value={ajoutgrammage} onChange={handlerChangerajoutgrammage} id="ajoutgrammage"/>
        <label htmlFor="ajoutdateheure">Date - heure </label>
        <input value={ajoutdateheure} onChange={handleChangerajoutdateheure} id="ajoutdateheure"/>  
        <label htmlFor="idanimal"> Veuillez confirmer l'ID de l'animal</label>
        <input value={idanimal2} onChange={handleChangeridanimal2} id="idanimal2"/> 
        <button type='submit'>Ajouter </button>
        </form>
        <div>
        <p>Pour rappel voici la liste de l'id de chaque animal:</p> 
        <ul>
          <li>2 = Dromadaire</li>
          <li>3 = Fennec</li>
          <li>4 = Panda roux</li>
          <li>5 = Gibbon à crête d'or</li>
          <li>6 = Léopard</li>
          <li>7 = Gazelle</li>
        </ul>
        <span>Attention cette liste peut-être modifié , contacté l'administrateur pour tout problème</span>
        </div>
       
       </div>
       <div>
      
       </div>
    </div>
   
  )
}