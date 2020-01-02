import React, { Component } from 'react'
import '../css/sidebar.css';

import SideBar from '../Component/SideBar';

 class dashboard extends Component {

    componentDidMount(){
     //   this.props.ChangeNavbar;
        }
            
        
    render() {
        return (
           
            <div>
                 <SideBar/>
            </div>
           
        )
    }
}

export default dashboard
