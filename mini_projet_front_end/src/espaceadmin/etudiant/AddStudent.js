import React, { Component } from 'react'
import axios from 'axios';
import DatePiker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/Table.css';
import etudiant from '../../etudiant.png'
import { withRouter } from 'react-router-dom';



export class AddStudent extends Component {

   constructor(props){ 
    super(props);
    this.onChangeCin=this.onChangeCin.bind(this);
    this.onChangeCne=this.onChangeCne.bind(this);
    this.onChangeNom=this.onChangeNom.bind(this);
    this.onChangePrenom=this.onChangePrenom.bind(this);
    this.onChangeNomFiliere=this.onChangeNomFiliere.bind(this);
    this.onChangeDateNaissance=this.onChangeDateNaissance.bind(this);

    this.state={
        cin:'',
        cne:'',
        prenom:'',
        nom:'',
        nomFiliere:'',
        date_n:new Date(),
        filieres:[]        
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3017/filieres/')
        .then(reponse=>{
            this.setState({
                filieres:reponse.data.map(filiere=>filiere.nomFiliere),
                nomFiliere:reponse.data[0].nomFiliere
            })
        })
     
        
    }
    onChangeCin=(e)=>{
        this.setState({
            cin:e.target.value
        })
    }
    onChangeCne=(e)=>{
        this.setState({
            cne:e.target.value
        })
    }
    onChangePrenom=(e)=>{
        this.setState({
            prenom:e.target.value
        })
    }
    onChangeNom=(e)=>{
        this.setState({
            nom:e.target.value
        })
    }

    onChangeNomFiliere=(e)=>{
        this.setState({
            nomFiliere:e.target.value
        })
    }

    onChangeDateNaissance=(Date)=>{
        this.setState({
            date_n:Date
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const student={
            cin:this.state.cin,
            cne:this.state.cne,
            prenom:this.state.prenom,
            nom:this.state.nom,
            nomFiliere:this.state.nomFiliere,
            date_n:this.state.date_n
        }

        console.log(student);
        axios.post('http://localhost:3017/students/add',student)
        .then(res=>{
                if(res.data)  this.props.history.push('/ListEtudiant/'+this.state.nomFiliere);
        })
        .catch(err=>console.log(err));
    
    }
    
    render() {
        return (
            <div>
                
                <center><img className="img-fluid profile-img-card" src={etudiant} alt=''/><h1>Ajouter Nouveau Etudiant</h1></center>
            <br/><br/><br/>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                        <div className="col">
                          <label ><strong>CIN</strong></label>
                          <input type="text"  className="form-control"  value={this.state.cin} onChange={this.onChangeCin}  />
                        </div>
                        <div className="col">
                          <label ><strong>CNE</strong></label>
                          <input type="text"  className="form-control"  value={this.state.cne} onChange={this.onChangeCne} required/>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                          <label ><strong>Prenom</strong></label>
                          <input type="text"  className="form-control"  value={this.state.prenom} onChange={this.onChangePrenom} required/>
                        </div>
                        <div className="col">
                          <label ><strong>Nom</strong></label>
                          <input type="text"  className="form-control"  value={this.state.nom} onChange={this.onChangeNom} required/>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                          <label ><strong>Filiere</strong></label>
                          <select  className="form-control" value={this.state.nomFiliere} onChange={this.onChangeNomFiliere} >
                              {this.state.filieres.map(filiere=>(
                                  <option key={filiere} value={filiere} >{filiere}</option>
                              ))}
                          </select>
                        </div>
                        <div className="col">
                          <label ><strong>Date de Naissance</strong></label>
                          <div>
                              <DatePiker className="form-control" selected={this.state.date_n} value={this.state.date_n} onChange={this.onChangeDateNaissance}></DatePiker>
                          </div>
                        </div>
                        </div><br/><br/>
                        <button type="submit" className="btn btn-primary col-2">Ajouter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AddStudent)