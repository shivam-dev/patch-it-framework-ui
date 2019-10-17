import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink} from 'react-router-dom';


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
       <div class="navbar">
          <div class="dropdown">
    <button class="dropbtn"> HOME
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
         <NavLink to="/"> PATCHING PROCESS</NavLink>
        <NavLink to="/single"> AUTOMATION FRAMEWORK OVERVIEW</NavLink>
        <NavLink to="/import"> KSPLICE </NavLink>
        <NavLink to="/import"> PATCHING CYCLES </NavLink>
        <NavLink to="/import"> FAQ </NavLink>
    </div>
  </div>
        <div class="dropdown">
    <button class="dropbtn"> COMPILANCE STATUS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <NavLink to="/single"> PATCHING HISTORY</NavLink>
        <NavLink to="/import"> CURRENT COMPILANCE STATUS </NavLink>
        <NavLink to="/import"> REPORT ON SYSTEM VERSION </NavLink>
    
    </div>
  </div>  
     <div class="dropdown">
    <button class="dropbtn"> ASSET MANAGEMENT
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <NavLink to="/single"> DISPLAY </NavLink>
        <NavLink to="/single"> SINGLE INVENTORY </NavLink>
       <NavLink to="/import"> IMPORT INVENTORY  </NavLink>
    </div>
  </div>
    <div class="dropdown" >
    <button class="dropbtn"> <span class="glyphicon glyphicon-wrench"></span>PATCHING
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <NavLink to="/user"> USER SETTINGS </NavLink>
    </div>
    </div>
    <div class="dropdown" >
    <button class="dropbtn"> <span class="glyphicon glyphicon-wrench"></span>PCI/SOX AdHoc
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <NavLink to="/user"> USER SETTINGS </NavLink>
    </div>
    </div>
    <NavLink to="/user"> WINDOWS PATCHING</NavLink>
    <div class="dropdown" >
    <button class="dropbtn"> <span class="glyphicon glyphicon-wrench"></span>USER 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <NavLink to="/user"> USER SETTINGS </NavLink>
    </div>
  </div>
    <div class="right">
     <NavLink to="/user"> LOGOUT</NavLink>
  </div>
</div>


    );
  }
}

export default NavbarPage;