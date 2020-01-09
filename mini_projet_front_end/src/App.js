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
   
    this.TestDeconnection=this.TestDeconnection.bind(this);
    this.handleLoggedIn=this.handleLoggedIn.bind(this);
   this.state={
       LoggedIn :false
        
        
  }
  }
  
  
  
  handleLoggedIn=()=>{
    this.setState({
      LoggedIn:true
    })
  }
  
  TestDeconnection=()=>{
    this.setState({
      LoggedIn:false
    })
   // localStorage.clear();

  }
  
  render() {
  return (
       <Router>
    <div className="App">

          {/*localStorage.getItem('LogIn')*/ this.state.LoggedIn  && <Navbar deconnect={this.TestDeconnection}/>}
        <Switch>
            <Route  exact path='/' component={()=><Admin setLoggedIn={this.handleLoggedIn}/>}/>
            <Route   path='/Dashboard' component={Dashboard }/> 
            <Route   path='/AddEtudiant' component={AddStudent} />
            <Route   path='/ListEtudiant/:nomFiliere' component={ListStudent} />
            <Route   path='/edit/:id' component={EditStudent} />
            <Route component={NotFound}/> 
        </Switch>
    
    </div>  
        </Router>
  );
}
}
export default App;