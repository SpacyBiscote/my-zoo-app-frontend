
import React, { useState , useEffect} from 'react';


export default function Veto() {
    
    const [ajoutétat , setAjoutétat] = useState('');
    const [typenourriture , setTypenourriture] = useState('');
    const [grammage ,setGrammage] = useState('');
    const [idanimal3 , setIdanimal3] = useState('');
    const [idanimal4 , setIdanimal4] = useState('');

    const handleChangeretat = (event) => {setAjoutétat(event.target.value);}
    const handleChangertypenourriture = (event) => {setTypenourriture(event.target.value);}
    const handleChangergrammage= (event) => {setGrammage(event.target.value);}
    const handleChangeridanimal3 =(event) => {setIdanimal3(event.target.value);} 
    const handleChangeridanimal4 =(event) => {setIdanimal4(event.target.value);}   

    async function Ajoutvéto() {
        try {
          const reponseAjoutveto = await fetch("http://localhost:8082/3000/Veto", {
            credentials: "include", method: "put", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ajoutétat: ajoutétat , typenourriture : typenourriture , grammage : grammage , idanimal3 :idanimal3 , idanimal4: idanimal4 }),
          });
          const jsonreponsevetohabitat = await reponseAjoutveto.json();
        } catch  {
          <p>Problème survenu. Veuillez contacter l'admin si ça ne s'arrange pas </p>
        }
      }


      const [getemployeco , setGetemployeco] = useState(null);

      async function getEmployeconso() {
        try {
          const getEmploye = await fetch("http://localhost:8082/3000/Veto" , 
          {credentials : "include" , method : "get" , headers: {'Content-Type': 'application/json'}});
          const getEmployejson = await getEmploye.json();
          setGetemployeco(getEmployejson);
          console.log(getEmployejson);
        }catch {
          <p>Problème lors du chargement</p>
        }
      }

      useEffect(() => {
        getEmployeconso();
      }, [])

    if(!getemployeco) {
       return <p>En cours de chargement</p>
    }
  return (
     <div className='Veto-container'>
        <h1>Vous êtes connecté en tant que vétérinaire</h1>
        <div className='Veto-container1'>
        <form className="formclass" onSubmit={(event) => { event.preventDefault(); Ajoutvéto(); }} >
            <label htmlFor="idanimal3">ID de l'animal</label>
            <input value={idanimal3} onChange={handleChangeridanimal3} id="idanimal3"/>
            <label htmlFor="ajoutétat" >état</label>
            <input value={ajoutétat} onChange={handleChangeretat} id="ajoutétat"/>
            <label htmlFor="type" >Le type nourriture</label>
            <input value={typenourriture} onChange={handleChangertypenourriture} id="typenourriture"/>
            <label htmlFor="grammage" >Grammage</label>
            <input value={grammage} onChange={handleChangergrammage} id="grammage"/>
            <label htmlFor="idanimal4">Veuillez vérifier l'ID de l'animal</label>
            <input value={idanimal4} onChange={handleChangeridanimal4} id="idanimal4"/>
            <button type='submit'>Envoyer</button>

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
        <h3>Voici la consommation habituelle des animaux relevé par l'employé:</h3> 
        {getemployeco.map((animal, index) => (
            <div key={index} className="animal-grammm">
               
            <p>{animal.Consonouriture}</p> 
            </div>
            ))}
        </div>
       
     </div>
  )
}