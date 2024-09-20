import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Housing from './Pages/Housing';
import Service from './Pages/Services';
import Contact from './Pages/Contact';
import Connexion from './Pages/Connexion';
import Navbar from './Navbar';
import Admins from './User/Admins';
import { AvisProvider } from './Aviscontext';

import Employe from './User/Employe';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AvisProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Housing" element={<Housing/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Connexion" element={<Connexion/>} />
          <Route path="/admin"  element={<Admins />} />
          <Route path="/Employe"  element={<Employe/>}/>
        </Routes> 
        </AvisProvider>
       
      </Router>
    </div>
  );
};

export default App;
