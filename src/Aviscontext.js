import { createContext, useState } from 'react';

export const AvisContext = createContext();

export const AvisProvider = ({ children }) => {
  const [avisAccepte, setAvisAccepte] = useState([]);

  const ajouterAvis = (avis) => {
    setAvisAccepte([...avisAccepte, avis]);
  };

  return (
    <AvisContext.Provider value={{ avisAccepte, ajouterAvis }}>
      {children}
    </AvisContext.Provider>
  );
};