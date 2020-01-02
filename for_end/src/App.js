import React , { Component }from 'react';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Etudiant from './Pages/Etudiant';
import NotFound from './Pages/NotFound';
import ListStudent from './espaceadmin/etudiant/ListStudent';
import AddStudent from './espaceadmin/etudiant/AddStudent';
import EditStudent from './espaceadmin/etudiant/EditStudent';
import Dashboard from './espaceadmin/Dashboard';
import './css/App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Component/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChangeNavbar = this.handleChangeNavbar.bind(this);
    this.state={
  flag : false
  }
  }

handleChangeNavbar=()=>{
  this.setState({
    flag : true	
  })
}


  render() {
  return (
     <Router>
    <div className="App">
       <Navbar flag={this.state.flag}/>   
    <Switch>
          <Route exact path='/' component={Home} />
          <Route   path='/Admin' component={Admin} />
          <Route   path='/Etudiant' component={Etudiant} />
          <Route   path='/AddEtudiant' component={AddStudent} />
          <Route   path='/ListEtudiant/:nomFiliere' component={ListStudent} />
          <Route   path='/edit/:id' component={EditStudent} />
          <Route   path='/dashboard' component={Dashboard} changeNavbar={this.handleChangeNavbar} />
          <Route   component={NotFound} />
      </Switch>
    </div>  
  </Router>
  );
}
}
export default App;