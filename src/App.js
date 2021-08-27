// import Content from "./Components/Content/Content";
import Navbar from './Components/Navigation/Navbar';
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import TakeNote from './Components/inputForm/TakeNote'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <hr style={{ borderColor: '#f1f3f4' }} />
        <div className="body">
          <SideBar />
        </div>
      </div>
      <Switch>
       <Route path='/'>
         <TakeNote/>
        </Route> 
        <Route path='reminders'>
         <TakeNote/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
