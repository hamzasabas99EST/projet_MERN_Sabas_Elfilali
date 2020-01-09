import React, { Component } from 'react'
import iconAdmin from '../images/iconAdmin.png'

class dashboard extends Component {

    //Page Dashboard
     
     render() {
        const username=localStorage.getItem('LogIn') ;
        return (
           
            <div>
                <center>
                <img className="img-fluid profile-img-card" src={iconAdmin} with="40px" alt=''/>
               <h1> Bienvenu sur votre espace Monsieur  {username}</h1>
               </center>
            </div>
           
        )
    }
}

export default dashboard
