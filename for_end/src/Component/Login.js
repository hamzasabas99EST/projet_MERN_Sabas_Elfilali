import React, { Component } from 'react'
import img1 from '../avatar_2x.png';
import '../css/Login.css'
export default class login extends Component {
    render() {
        return (
        <div className="login-card">
                <h2 class="text-center">Administrateur</h2>
        
            <img class="img-fluid profile-img-card" src={img1} alt='Hello'/>
            <p class="profile-name-card"></p>
            <form class="form-signin" action="" method="">
                <input class="form-control" type="text" required="" placeholder="Username" autofocus="" id="inputEmail" name="email"/>
                    <input class="form-control" type="password" required="" placeholder="Password" id="inputPassword" name="password"/>
                <button
                    class="btn btn-primary btn-block btn-lg btn-signin" type="submit" name="login">Login </button>
            </form>
                
        </div>
        )
    }
}
