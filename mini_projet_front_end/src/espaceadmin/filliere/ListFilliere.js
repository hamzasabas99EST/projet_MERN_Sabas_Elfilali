import React, { Component } from 'react'
import axios from 'axios';
import {Link}  from 'react-router-dom'
import '../../css/Table.css';



 class ListStudent extends Component {
    
    constructor(props){ 
        super(props);
        this.deleteFilliere=this.deleteFilliere.bind(this);
        this.listStudents=this.listStudents.bind(this)
        this.state={
            fillieres:[]
        }
     }
    componentDidMount(){
        this.listStudents();
        
        }

    listStudents=()=>{
        
        axios.get('http://localhost:3017/filieres/')
        .then(reponse=>{
            this.setState({fillieres:reponse.data})
        })
    }
   /* componentWillUpdate(nextProps) {
        if (nextProps.match.params.nomFiliere !== this.props.match.params.nomFiliere) {
            const nomFiliere = nextProps.match.params.nomFiliere
            this.listStudents( nomFiliere );
        }
        }
    */     

   deleteFilliere(id){
        axios.delete('http://localhost:3017/filieres/delete/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            fillieres:this.state.fillieres.filter(el=>el._id!==id)
        })
    
    } 

   
    render() {
     
        return (

            <div className="">
           
           
                      <h1 className='title'>Liste des Fillieres </h1>
                <div className="row ">
                   
                 </div><br></br>
                <div className="">
               <table className="table table-striped table-inverse table-responsive ">
                   <thead className="thead-inverse">
                       <tr>
                           <th>Filiere</th>
                           <th>Libelle</th>
                       </tr>
                       </thead>
                       <tbody>
                           {this.state.fillieres.map(filliere=>(
                             <tr key={filliere._id}>
                                 <td>{filliere.nomFiliere }</td>
                                 <td>{filliere.libelle}</td>
                                
                                <td> <Link className='btn btn-primary ' to={"/editFilliere/"+filliere._id} >Edit</Link>  | <Link to="#" className="btn  btn-danger btn-xs" onClick={()=>this.deleteFilliere(filliere._id)}>Delete</Link>   </td>
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
