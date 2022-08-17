import React from 'react';
import { Switch } from 'react-router-dom';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Department from './Container/Department';
import Doctors from './Container/Doctors/Doctors';
import Home from './Container/Home';
import Login from './Container/Login/Login';
import Medicines from './Container/Medicines/Medicines';
import Bookapt from './Container/Appointment/Bookapt';
import Listapt from './Container/Appointment/Listapt';
// import PrivetRoot from './Container/Root/PrivetRoot';
import PublicRoot from './Container/Root/PublicRoot';


function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <PublicRoot exact path={"/"} component={Home} />
        <PublicRoot exact path={"/department"} component={Department} />
        <PublicRoot exact path={"/medicines"} component={Medicines} />
        <PublicRoot exact path={"/doctors"} component={Doctors} />
        <PublicRoot exact path={"/about"} component={About} />
        <PublicRoot exact path={"/contact"} component={Contact} />
        <PublicRoot exact path={"/login"} restricted={true} component={Login} />
        <PublicRoot exact path={"/Bookappoinment"} component={Bookapt} />
        <PublicRoot exact path={"/Listappoinment"} component={Listapt} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
