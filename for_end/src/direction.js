import React, { Component } from 'react'
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Etudiant from './Pages/Etudiant';
import NotFound from './Pages/NotFound';
import ListStudent from './espaceadmin/etudiant/ListStudent';
import AddStudent from './espaceadmin/etudiant/AddStudent';
import EditStudent from './espaceadmin/etudiant/EditStudent';
import Dashboard from './espaceadmin/Dashboard';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

 class direction extends Component {
    render() {
        return (
            <Router>
            <div className="">
              <Switch>
            
                  <Route exact path='/' component={Home} />
                  <Route   path='/Admin' component={Admin} />
                  <Route   path='/Etudiant' component={Etudiant} />
                  <Route   path='/AddEtudiant' component={AddStudent} />
                  <Route   path='/ListEtudiant/:nomFiliere' component={ListStudent} />
                  <Route   path='/dashboard' component={Dashboard} />
                  <Route   path='/edit/:id' component={EditStudent} />
                  <Route   component={NotFound} />
              </Switch>
            </div>  
          </Router>
        )
    }
}

export default direction
