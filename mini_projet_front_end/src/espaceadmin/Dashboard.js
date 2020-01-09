import React, { Component } from 'react'

class dashboard extends Component {

     
     render() {
        const username=localStorage.getItem('LogIn') ;
        return (
           
            <div>
                
               <h1> Bienvenu sur votre espace Monsieur  {username}</h1>
            
            </div>
           
        )
    }
}

export default dashboard
