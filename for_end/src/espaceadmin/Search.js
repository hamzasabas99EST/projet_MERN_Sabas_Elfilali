import React, { Component } from 'react'

export class Search extends Component {
    state={
        search :''
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
               <form onSubmit={this.SearchStudent}>
                 <div className="form-group col-md">
                    <input type="text" className="form-control" onChange={this.handleForm} value={search} id="" placeholder="Recherche" />
                </div>   
                <button className="btn btn-danger bt-block col-md-12">Chercher</button>
             </form> 
             
               
            </div>
        )
    }
}

export default Search
