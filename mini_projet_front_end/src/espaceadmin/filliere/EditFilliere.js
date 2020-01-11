import React, { Component } from 'react'
import axios from 'axios';
import '../../css/Table.css';
import { withRouter } from 'react-router-dom';


 class EditFilliere extends Component {

  constructor(props){ 
    super(props);
    this.onChangeNomFiliere=this.onChangeNomFiliere.bind(this);
    this.onChangelibelle=this.onChangelibelle.bind(this);

    this.state={
        nomFiliere:'',
        libelle:''  
        }
    }

    componentDidMount(){
        
      axios.get(`http://localhost:3017/filieres/`+this.props.match.params.id)
      .then(res=>
      this.setState({
        nomFiliere:res.data.nomFiliere,
        libelle:res.data.libelle, 
      }))
      .catch(err=>console.log(err));
      
   
    }
   
    onChangeNomFiliere=(e)=>{
        this.setState({
            nomFiliere:e.target.value
        })
    }

    onChangelibelle=(e)=>{
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
        axios.post(`http://localhost:3017/filieres/update/`+this.props.match.params.id,filliere)
        .then(res=>{
            if(res.data){
                this.props.history.push('/ListFilliere/'/*+student.nomFiliere*/) 
            }
        })
        .catch(err=>console.log(err));
      

    }
    render() {
        return (
            <div>
                
            <center><h1>Ajouter Nouveau Filiere </h1></center>
        <br/><br/><br/>
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="col">
                      <label ><strong>Abriviation</strong></label>
                      <input type="text"  className="form-control"   value={this.state.nomFiliere} onChange={this.onChangeNomFiliere} required  />
                    </div>
                    <div className="col">
                      <label ><strong>libelle</strong></label>
                      <input type="text"  className="form-control"  value={this.state.libelle}  onChange={this.onChangelibelle} required/>
                    </div>
                    </div>
                   
                   <br/><br/>
                    <button type="submit"  className="btn btn-primary  col-sm-3">Modifier</button>
                </form>
            </div>
        </div>
        )
    }
}

export default withRouter(EditFilliere)
