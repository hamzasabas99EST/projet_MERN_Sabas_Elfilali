import React, { Component } from 'react'
import Logo from '../images/Logo.jpg';
import '../css/Login.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


 class Admin extends Component {

    constructor(props){ 
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
      
        this.state={
            username:'',
            password:'',
            }
        }

    onChangeUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    
    onChangePassWord=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    onSubmit=(e)=>{
     
        e.preventDefault();
        
        const data={    
            username:this.state.username,
            password:this.state.password
        }
        
        axios.post(`http://localhost:3017/admins/login/`,data)
        .then(reponse=> 
            {   
                console.log(reponse);
                
                
               if(reponse.data.length===1) 
                 {
                    this.props.setLoggedIn();
                     localStorage.setItem('LogIn',reponse.data[0].username);
                    
                   this.props.history.push('/Dashboard')
                    //window.location='/Dashboard'
            
                    
                } 
                else alert('error into login');
                 
            }
            )

        
        
    }
    render() {
        return (
            
            <div className="container">
                <div className="row row-login">
                    <div className="col-10 col-sm-6 col-md-4 offset-1 offset-sm-3 offset-md-4"><br/><br/><br/>
                        <h1 className="text-center">Espace Admin</h1><br/>
                        <div className="card">
                            <div className="card-body">
                            <img className="img-fluid profile-img-card" src={Logo} alt='logo-est'/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>UserName</label>
                                        <input className="form-control" 
                                            type="text"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password </label>
                                        <input className="form-control" 
                                            type="password" 
                                            autoComplete="Password"
                                            value={this.state.password}
                                            onChange={this.onChangePassWord}
                                        />
                                    </div>
                                    <button className="btn btn-success btn-block" type="submit" style={{margin:10}}>LOGIN </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           </div>            
        
        )
    }
}

export default withRouter(Admin);
