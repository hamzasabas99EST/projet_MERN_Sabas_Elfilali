import React, { Component } from 'react'
import img1 from '../avatar_2x.png';
import '../css/Login.css';
import axios from 'axios';
export default class Admin extends Component {

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
    onSubmit= (e)=>{

        
        const data={    
            username:this.state.username,
            password:this.state.password
        }
        e.preventDefault();
        
            axios.post(`http://localhost:3017/admins/login/`,data)
            .then(reponse=> 
                {
                    if(reponse.data.length>0) window.location='/dashboard'; 
                    else alert('error into login');
                }
        )
           
        
        
    }
    render() {
        return (
            <div className="login-card">
                <h2 className="text-center">Administrateur</h2>
        
            <img className="img-fluid profile-img-card" src={img1} alt='Hello'/>
            <p className="profile-name-card"></p>
            <form className="form-signin" onSubmit={this.onSubmit}>
                <input className="form-control" 
                type="text" required="" 
                placeholder="Username"
                 value={this.state.username}
                 onChange={this.onChangeUsername}
                  />
                  <input className="form-control" 
                type="password" required="" 
                placeholder="Password"
                 current-password="true" 
                 value={this.state.password}
                 onChange={this.onChangePassWord}
                  />
                <button
                    className="btn btn-primary btn-block btn-lg btn-signin"    >Login </button>
            </form>
                
        </div>
        )
    }
}
