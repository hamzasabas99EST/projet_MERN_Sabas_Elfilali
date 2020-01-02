import React, { Component } from 'react'
import axios from 'axios';
import DatePiker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class EditStudent extends Component {

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
        
      axios.get(`http://localhost:3017/students/`+this.props.match.params.id)
      .then(res=>
      this.setState({
        cin:res.data.cin,
        cne:res.data.cne,
        prenom:res.data.prenom,
        nom:res.data.nom ,
        nomFiliere:res.data.nomFiliere,
        date_n:new Date(res.data.date_n), 
      }))
      .catch(err=>console.log(err));
      
      axios.get('http://localhost:3017/filieres/')
        .then(reponse=>{
            if(reponse.data.length>0){
            this.setState({
                filieres:reponse.data.map(filiere=>filiere.nomFiliere),
                
            })
        }
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
            date_n:this.state.date_n,
        }

        console.log(student);
        axios.post(`http://localhost:3017/students/update/`+this.props.match.params.id,student)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
        window.location='/ListEtudiant/'+student.nomFiliere;

    }
    render() {
        return (
            <div>
                <h1><center>Modifier Info de  {this.state.nom} { this.state.prenom}</center></h1>
                <div className="container">
                <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                          <label ><strong>CIN</strong></label>
                          <input type="text"  className="form-control" disabled  value={this.state.cin} onChange={this.onChangeCin} placeholder=""/>
                        </div>
                        <div className="form-group">
                          <label ><strong>CNE</strong></label>
                          <input type="text"  className="form-control" disabled value={this.state.cne} onChange={this.onChangeCne} placeholder=""/>
                        </div>
                        <div className="form-group">
                          <label ><strong>Prénom</strong></label>
                          <input type="text"  className="form-control"  value={this.state.prenom} onChange={this.onChangePrenom} placeholder=""/>
                        </div>
                        <div className="form-group">
                          <label ><strong>Nom</strong></label>
                          <input type="text"  className="form-control"  value={this.state.nom} onChange={this.onChangeNom} placeholder=""/>
                        </div>
                        <div className="form-group">
                          <label ><strong>Filiere</strong></label>
                          <select  className="form-control"  value={this.state.nomFiliere}  onChange={this.onChangeNomFiliere}>
                              {this.state.filieres.map(filiere=>(
                                  <option  key={filiere}   value={filiere} >{filiere}</option>
                              ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label ><strong>Date de Naissance</strong></label>
                          <div>
                            <DatePiker className="form-control" disabled selected={this.state.date_n} value={this.state.date_n} onChange={this.onChangeDateNaissance}></DatePiker>
                         </div>
                        </div>
                        <button type="submit" className="btn btn-primary col-3">Modifier</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditStudent
