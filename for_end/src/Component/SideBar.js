import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

 class SideBar extends Component {
    constructor(props){
        super(props)
        this.state={
            filieres:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:3017/filieres/')
        .then(reponse=>{
            this.setState({filieres:reponse.data})
        })
     
        }
    render() {
       
        return (
                <div>
                    <div className="sidenav">
                        {this.state.filieres.map(filiere=>(
                            <Link key={filiere._id} to={`/ListEtudiant/`+filiere.nomFiliere}>{filiere.nomFiliere}</Link>
                        ))}
                              <Link to='/AddEtudiant'> Ajouter Etudiant </Link>
                    
                        </div>
                     
                </div>
          
        )
    }
}

export default SideBar
