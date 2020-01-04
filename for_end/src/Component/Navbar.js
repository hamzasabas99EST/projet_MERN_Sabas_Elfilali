import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";



class Navbar extends Component {
  
  constructor(props){
    super(props)
    this.state={
        filieres:[]
    }
}
// static getDerivedStateFromProps(props, state)

componentDidMount(){
    axios.get('http://localhost:3017/filieres/')
    .then(reponse=>{
        this.setState({filieres:reponse.data})
        console.log(reponse.data)
    })

    
 
}


render() {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Est Essaouira</Link >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link  className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link >
                    </li>
                    <li className="nav-item">
                         <Link to='/AddEtudiant'className='nav-link'> Ajouter Etudiant </Link>
                    </li>
                    <li className="nav-item dropdown" >
                    <Link className="nav-link dropdown-toggle" to='#' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">List des Etudiants </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {this.state.filieres.map(filiere=>(
                             <Link key={filiere._id} className='dropdown-item'to={`/ListEtudiant/`+filiere.nomFiliere}>{filiere.nomFiliere}</Link>
                         ))}
                        
                          
                        </div>    
                    </li>
                   
                  </ul>
              
              </div>
          </div>
        </nav>        
    </div>
    );
  }
}

export default Navbar;
