import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button'
import NavbarPage from './NavbarPage'
import SingleInventory from './SingleInventory'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import ImportInventory from './ImportInventory'
import UserSettings from './UserSettings'

import Login from './pages/login/Login';

/*function App() {
  return (
   <div className="App">
      <header className="App-header">
        <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
      </header>
    </div>
  );
}
*/

class App extends React.Component {


   render() {
      return (
            <BrowserRouter>
            <div>
         
            <Switch>
               <Route path="/" component={Home} exact />
               <Route exact path="/login" name="Login Page" component={Login}/>
               <Route path="/single" component={SingleInventory} />
               <Route path="/import" component={ImportInventory} />
               <Route path="/user" component={UserSettings} />
               <Route component={Error} />
            </Switch>
            </div>
            </BrowserRouter>
      )
   }
}
export default App;