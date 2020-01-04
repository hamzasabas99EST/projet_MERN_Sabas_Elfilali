import React, { Component } from 'react'
import axios from 'axios';
import {Link}  from 'react-router-dom'
import Search from '../Search'
import '../../css/Table.css';
import Dashboard from '../Dashboard';


export class ListStudent extends Component {
    
    constructor(props){ 
        super(props);
        this.deleteStudent=this.deleteStudent.bind(this);
        this.listStudents=this.listStudents.bind(this)
        this.state={
            students:[]
        }
     }
    componentDidMount(){
       
        this.listStudents(this.props.match.params.nomFiliere);
        }

    listStudents=(filier)=>{
        
        axios.get('http://localhost:3017/students/listStudent/'+filier)
        .then(reponse=>{
            this.setState({students:reponse.data})
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.nomFiliere !== this.props.match.params.nomFiliere) {
            const nomFiliere = nextProps.match.params.nomFiliere
            this.listStudents( nomFiliere );
        }
        }
         

    deleteStudent(id){
        axios.delete('http://localhost:3017/students/delete/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            students:this.state.students.filter(el=>el._id!==id)
        })
    
    } 

    searchStudentForm=(val)=>{
        if(val!== ''){
        axios.get('http://localhost:3017/students/searchStudent/'+val+'/'+this.props.match.params.nomFiliere)
        .then(reponse=>{
            this.setState({students:reponse.data})
        })
        }else return this.setState({students: this.state.students})

    }
  
    render() {
      //  const filier =this.props.match.params.nomFiliere
        return (

            <div className="">
            <Dashboard/>
                      <h1 className='title'>Liste des étudiants de {this.props.match.params.nomFiliere}</h1>
                <div className="row ">
                    <div className="search"> 
                        <Search  getStudentSearch={this.searchStudentForm}/>
                    </div>
                 </div><br></br>
                <div className="">
               <table className="table table-striped table-inverse table-responsive col-ms-12">
                   <thead className="thead-inverse">
                       <tr>
                           <th>CIN</th>
                           <th>CNE</th>
                           <th>Nom</th>
                           <th>Prénom</th>
                           <th>Date de Naissance</th>
                       </tr>
                       </thead>
                       <tbody>
                           {this.state.students.map(student=>(
                             <tr key={student._id}>
                                 <td>{student.cin}</td>
                                 <td>{student.cne}</td>
                                 <td>{student.nom}</td>
                                 <td>{student.prenom }</td>
                                 <td>{String(student.date_n).substring(0,10)}</td>
                                  <td> <Link className='btn btn-primary ' to={"/edit/"+student._id} >Edit</Link>  | <Link to="#" className="btn  btn-danger btn-xs" onClick={()=>this.deleteStudent(student._id)}>Delete</Link>   </td>
                            </tr>
                           ))}
                       </tbody>
               </table>
               </div>
            </div>
        )
    }
}

export default ListStudent
