import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button'
import NavbarPage from './NavbarPage';
import {BrowserRouter, Route} from 'react-router-dom'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


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

class Home extends React.Component {
  state = {
    todos: []
  }
  


  componentDidMount() {
    fetch('http://localhost:5000/api/Inventory')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  /* constructor(props) {
      super(props)
      this.state = {
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }*/

   renderTableHeader() {
   
    /*let header = Object.keys(this.state.todos[1])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })*/
     return (
      <tr>
       <th>HOSTNAME</th>
        <th>IP</th>
        <th>ZONE</th>
        <th>ENVIRONMENT</th>
        <th>ORG</th>
        <th>PRODUCTTEAM</th>
        <th>APPNAME</th>
        <th>BUSINESSCONTACT</th>
        <th>EMAIL</th>
        <th>MAKE</th>
        <th>MODEL</th>
        <th>SERIALNUMBER</th>       
        <th>HOSTTYPE</th>
        <th>OSTYPE </th>
        <th>OSVERSION</th>
        <th>KERNELVERSION</th>
        <th>UNSUPPORTEDOS</th>
        <th>ACTIVE</th>
        <th>STATUS</th>
        <th>FREQUENCY</th>
        <th>DAYOFMONTH</th>
        <th>DAYOFWEEK</th>
        <th>HOURSTART</th>
        <th>MINSTART</th>
        <th>DURATION</th>
        <th>TAKSNAPSHOT</th>
        <th>VALIDATION</th>
        <th>KSPLICESTATUS</th>
        <th>KSPLICEREBOOT</th>
        <th>LASTPATCHTIME</th>
        <th>COMPLIANCESTATUS</th>
        <th>PATCHINGEXCEPTION</th>
        <th>MARKEDFORDECOM</th>
        <th></th>
      </tr>
      )
   }

   renderTableData() {
      return this.state.todos.map((todo, index) => {
         const { userId, id, title, completed } = todo //destructuring
         return (
            <tr key={todo.hostName}>
               <td>{todo.hostName}</td>
               <td>{todo.ip}</td>
               <td>{todo.zone}</td>
               <td>{todo.environment}</td>
               <td>{todo.org}</td>
               <td>{todo && todo.owner && todo.owner.productTeam}</td>
               <td>{todo && todo.owner && todo.owner.appName}</td>
               <td>{todo && todo.owner && todo.owner.businessContact}</td>               
               <td>{todo && todo.owner && todo.owner.email}</td>
               <td>{todo && todo.hardware && todo.hardware.hostType}</td>
               <td>{todo && todo.hardware && todo.hardware.make}</td>
               <td>{todo && todo.hardware && todo.hardware.model}</td>
               <td>{todo && todo.hardware && todo.hardware.serialNumber}</td>
               <td>{todo && todo.hardware && todo.hardware.consoleInfo}</td>
               <td>{todo && todo.os && todo.os.osType}</td>              
               <td>{todo && todo.os && todo.os.osVersion}</td> 
               <td>{todo && todo.os && todo.os.kernelVersion}</td> 
               <td>{todo && todo.os && todo.os.unsupportedOs}</td>
               <td>{todo.active}</td>      
               <td>{todo.status}</td>
               <td>{todo && todo.outageWindow && todo.outageWindow.frequency}</td>
               <td>{todo && todo.outageWindow && todo.outageWindow.dayOfMonth}</td>
               <td>{todo && todo.outageWindow && todo.outageWindow.dayOfWeek}</td>
               <td>{todo && todo.outageWindow && todo.outageWindow.hourStart}</td>
               <td>{todo && todo.outageWindow && todo.outageWindow.minStart}</td>
               <td>{todo && todo.outageWindow && todo.outageWindow.duration}</td>
               <td>{todo && todo.vcenter && todo.vcenter.takeSnapshot}</td>
               <td>{todo && todo.vcenter && todo.vcenter.validation}</td>
               <td>{todo && todo.ksplice && todo.ksplice.kspliceStatus}</td>
               <td>{todo && todo.ksplice && todo.ksplice.kspliceReboot}</td>
               <td>{todo.lastPatchTime}</td>
               <td>{todo.complianceStatus}</td>
               <td>{todo.patchException}</td>
               <td>{todo.markedforDecom}</td>
               <td></td>
            </tr>
         )
      })
   }

   render() {
    const options = {
        filterType: "dropdown",
        responsive: "scroll",
        rowsPerPage: 10,
        selectableRows: "none",
        viewColumns: true,
        sort: true
      };
      return (
         <div class="container-fluid">
            <h1 id='title'>PATCH IT FRAMEWORK</h1>
            <table id='students'>
               <tbody class='tbody'>
                  {this.renderTableHeader()}
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}
export default Home;