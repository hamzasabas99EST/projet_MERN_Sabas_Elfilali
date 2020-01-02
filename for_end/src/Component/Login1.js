import React, { Component } from 'react'
import '../css/Login1.css'
export default class Login1 extends Component {
    render() {
        return (
        <div class="container">
        <div class="row row-login">
            <div class="col-10 col-sm-6 col-md-4 offset-1 offset-sm-3 offset-md-4">
                <h1 class="text-center">Etudiant</h1>
                <div class="card">
                    <div class="card-body">
                        <h3 class="text-primary"><center>Login </center></h3>
                        <form>
                            <div class="form-group"><label>UserName</label><input class="form-control" type="text"/></div>
                            <div class="form-group"><label>Password </label><input class="form-control" type="password"/></div>
                            <div class="form-group">
                                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"/><label class="form-check-label" for="formCheck-4">Remember me</label></div>
                            </div><button class="btn btn-success btn-block" type="submit">LOGIN </button></form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
