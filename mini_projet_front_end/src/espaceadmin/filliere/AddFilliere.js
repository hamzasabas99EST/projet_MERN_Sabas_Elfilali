import React, { Component } from 'react'
import axios from 'axios';
import '../../css/Table.css';
//import etudiant from '../../etudiant.png'
import { withRouter } from 'react-router-dom';



 class AddFilliere extends Component {

    constructor(props){ 
        super(props);
        this.onChangeNomFilliere=this.onChangeNomFilliere.bind(this);
        this.onChangeLibelle=this.onChangeLibelle.bind(this);
       
        
        this.state={
            nomFiliere:'',
            libelle:''   
            }
        }
    
        onChangeNomFilliere=(e)=>{
            this.setState({
                nomFiliere:e.target.value
            })
        }
        
        onChangeLibelle=(e)=>{
            this.setState({
                libelle:e.target.value
            })
        }

        onSubmit=(e)=>{
            e.preventDefault();
    
            const filliere={
               
                nomFiliere:this.state.nomFiliere,
                libelle:this.state.libelle
                
            }
    
            console.log(filliere);
            axios.post('http://localhost:3017/filieres/add',filliere)
            .then(res=>{
                    if(res.data)  this.props.history.push('/ListFilliere/'/*+this.state.nomFiliere*/);
            })
            .catch(err=>console.log(err));
        
        }

    render() {
        return (
            <div>
                
                <center><h1>Ajouter Nouveau Filliere </h1></center>
            <br/><br/><br/>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                        <div className="col">
                          <label ><strong>Abriviation</strong></label>
                          <input type="text"  className="form-control"   value={this.state.nomFiliere} onChange={this.onChangeNomFilliere} required  />
                        </div>
                        <div className="col">
                          <label ><strong>libelle</strong></label>
                          <input type="text"  className="form-control"  value={this.state.libelle}  onChange={this.onChangeLibelle} required/>
                        </div>
                        </div>
                       
                       <br/><br/>
                        <button type="submit"  className="btn btn-primary  col-sm-3">Ajouter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AddFilliere)