import React, { Component } from 'react'
import axios from 'axios'
export class Search extends Component {
    state={
        search :'',
        filieres:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3017/filieres/')
        .then(reponse=>{
            this.setState({filieres:reponse.data})
          
        })
    }

    handleForm=(e)=>{
        this.setState({
            search:e.target.value
        })
    }

    SearchStudent=(e)=>{
        e.preventDefault();
        this.props.getStudentSearch(this.state.search)
    }
    render() {
   
        const {search}=this.state;
        

        return (
            <div>
               <form onSubmit={this.SearchStudent} className="col-md-12" style={{margin:10}}>
                 
                <select   className="form-control" value={search} onChange={this.handleForm} >
                    <option>Tous les fillieres</option>
                    {this.state.filieres.map(filiere=>(
                        <option key={filiere._id} value={filiere._nomFiliere} >{filiere.nomFiliere}</option>
                    ))}
                </select>
                <button className="btn btn-danger bt-block " style={{margin:10}}>Chercher</button>
             </form> 
             
               
            </div>
        )
    }
}

export default Search
