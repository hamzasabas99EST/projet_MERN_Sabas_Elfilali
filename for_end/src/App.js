import React , { Component }from 'react';
import Admin from './Pages/Admin';
import './css/App.css';
import NotFound from './Pages/NotFound';
import ListStudent from './espaceadmin/etudiant/ListStudent';
import AddStudent from './espaceadmin/etudiant/AddStudent';
import EditStudent from './espaceadmin/etudiant/EditStudent';
import Dashboard from './espaceadmin/Dashboard';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Component/Navbar';


class App extends Component {

  constructor(props) {
    super(props);
    //this.handleChangeNavbar = this.handleChangeNavbar.bind(this);
    this.state={
        IsLogin :''
  }
  }
  
  testLoginChick=(val)=>{
    this.setState({
      IsLogin:false
    })
  }

  


  render() {
  return (
       <Router>
    <div className="App">
         
         
        <Switch>
            <Route exact  path='/' component={Admin}/> 
            <Route   path='/Dashboard' component={Dashboard}/> 
            <Route   path='/AddEtudiant' component={AddStudent} />
            <Route   path='/ListEtudiant/:nomFiliere' component={ListStudent} />
            <Route   path='/edit/:id' component={EditStudent} />
            <Route  component={NotFound}></Route>
        </Switch>
    
    </div>  
        </Router>
  );
}
}
export default App;