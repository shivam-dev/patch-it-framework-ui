import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import './modal.css';
import './App.scss'
import { createSingleInventoryPost } from './createSingleInventoryPost';
import axios from 'axios'



class SingleInventory extends Component {
  
 
   constructor(props) {
    super(props)

    this.state = {
      hostName: '',
      ip: '',
      zone: 'PCI',
      environment: 'DEV',
      org: 'CORP',
      productTeam: '',
      appName: '',
      businessContact: '',
      email: '',
      hostType:'',
      make: '',
      model: '',
      serialNumber: '',
      osType:'RHEL',
      osVersion: '',
      kernelVersion: '',
      unsupportedOs: '',
      active:'true',
      status: 'ready',
      frequency: 'monthly',
      dayOfMonth: '',
      dayOfWeek: '',
      hourStart: '',
      minStart: '',
      duration: '',
      takSnapshot: 'true',
      validation: 'true',
      kspliceStatus: '',
      kspliceReboot: 'false',
      lastPatchTime: '',
      complianceStatus: '',
      patchingException: 'false',
      markedForDecom:'false',
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })

  }
  onChangeZone(ev1) {
    this.setState({zone: ev1.target.value});
    alert(ev1.target.value)
  }
   onChangeEnvironment(ev2) {
    this.setState({environment: ev2.target.value});
    alert(ev2.target.value)
  }
    onChangeOrg(ev3) {
    this.setState({org: ev3.target.value});
    alert(ev3.target.value)
  }
    onChangeHostType(ev4) {
    this.setState({hostType: ev4.target.value});
    alert(ev4.target.value)
  }
    onChangeOsType(ev5) {
    this.setState({osType: ev5.target.value});
    alert(ev5.target.value)
  }
    onChangeUnsupportedOS(ev6) {
    this.setState({unsupportedOs: ev6.target.value});
    alert(ev6.target.value)
  }
    onChangeActive(ev7) {
    this.setState({active: ev7.target.value});
    alert(ev7.target.value)
  }
    onChangeStatus(ev8) {
    this.setState({status: ev8.target.value});
    alert(ev8.target.value)
  }
    onChangeFrequency(ev9) {
    this.setState({frequency: ev9.target.value});
    alert(ev9.target.value)
  }
    onChangeTakeSnapShot(ev10) {
    this.setState({takeSnapshot: ev10.target.value});
    alert(ev10.target.value)
  }
    onChangeValidation(ev11) {
    this.setState({validation: ev11.target.value});
    alert(ev11.target.value)
  }
   onChangeKspliceStatus(ev12) {
    this.setState({kspliceStatus: ev12.target.value});
    alert(ev12.target.value)
  }
    onChangeKspliceReboot(ev13) {
    this.setState({kspliceReboot: ev13.target.value});
    alert(ev13.target.value)
  }

    submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('http://localhost:5000/api/post', this.state,{
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})
      .then((response) => response.json()).then((responseJson) => {
  console.log(responseJson);
 //this.setState({pressed: false});
})
      .catch(error => {
        console.log(error)
      })
  }

  //handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.hostName + this.state.ip );
    //event.preventDefault();
  //}

    render() {

      const { hostName, ip, zone, environment, org, productTeam, appName, businessContact, email, hostType, make, model, serialNumber, consoleInfo, osType, osVersion, kernelVersion, unsupportedOs, active, status, frequency, dayOfMonth, dayOfWeek, hourStart, minStart, duration, takeSnapshot, validation, kspliceStatus, kspliceReboot, lastPatchTime, complianceStatus, patchingException, markedForDecom } = this.state
 
        return (
            <div>
                 <form class="modal-content animate" onSubmit={this.submitHandler}>

            <div class="container">
             <label for="uname"><b>Host Name</b></label>
                <input type="text" placeholder="Enter HOSTNAME" name="hostName"  
                                           required="required"
                                           value={hostName}
                      onChange={this.changeHandler}/>
             <label for="psw"><b>IP Address</b></label>
                <input type="text" placeholder="Enter IPADDRESS"  name="ip" value={ip}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Zone</b></label>
                <select name="zone" value={zone} onChange={this.onChangeZone.bind(this)} >
                    <option value="PCI" label="PCI" />
                    <option value="NON-PCI" label="NON_PCI" />
                </select>  
             <label for="psw"><b>Environment</b></label>
                <select name="environment" value={environment} onChange={this.onChangeEnvironment.bind(this)} >
                    <option value="DEV" label="DEV" />
                    <option value="PROD" label="PROD" />
                </select>
             <label for="psw"><b>ORG</b></label>
                <select name="org" value={org} onChange={this.onChangeOrg.bind(this)} >
                    <option value="CORP" label="CORP" />
                    <option value="GID" label="GID" />
                </select>
             <label for="psw"><b>Product Team</b></label>
                <input type="text" placeholder="Enter productTeam"  name="productTeam" value={productTeam}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>App Name</b></label>
                <input type="text" placeholder="Enter appName"  name="appName" value={appName}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Business Contact</b></label>
                <input type="text" placeholder="Enter businessContact"  name="businessContact" value={businessContact}
                      onChange={this.changeHandler} required/>         
             <label for="psw"><b>Product Team Email</b></label>
                <input type="text" placeholder="Enter email"  name="email" value={email}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Host Type</b></label>
                 <select name="hostType" value={hostType} onChange={this.onChangeHostType.bind(this)} >
                      <option value="Physical" label="Physical" />
                      <option value="Cloud" label="Cloud" />
                 </select>     
             <label for="psw"><b>Host Make</b></label>
                 <input type="text" placeholder="Enter Host manufacturer"  name="make" value={make}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Host Model</b></label>
                 <input type="text" placeholder="Enter Host Model"  name="model" value={model}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Host Serial Numbers</b></label>
                 <input type="text" placeholder="Enter Host serial Number"  name="serialNumber" value={serialNumber}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Console Information</b></label>
                 <input type="text" placeholder="Enter Console Information"  name="consoleInfo" value={consoleInfo}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>OS Type</b></label>
                 <select name="osType" value={osType} onChange={this.onChangeOsType.bind(this)} >
                      <option value="RHEL" label="RHEL" />
                      <option value="Centos" label="Centos" />
                 </select>
             <label for="psw"><b>OS Version</b></label>
                 <input type="text" placeholder="Enter version"  name="osVersion" value={osVersion}
                      onChange={this.changeHandler} required/> 
             <label for="psw"><b>Kernel Version</b></label>
                 <input type="text" placeholder="Enter Kernel Version"  name="kernelVersion" value={kernelVersion}
                      onChange={this.changeHandler} required/>         
             <label for="psw"><b>Unsupported OS</b></label>
                 <select name="unsupportedOs" value={unsupportedOs} onChange={this.onChangeUnsupportedOS.bind(this)} >
                      <option value="true" label="true" />
                      <option value="false" label="false" />
                 </select> 
             <label for="psw"><b>Active</b></label>
                 <select name="active" value={active} onChange={this.onChangeActive.bind(this)} >
                      <option value="true" label="true" />
                      <option value="false" label="false" />
                 </select>     
             <label for="psw"><b>Patching Status</b></label>
                 <select name="status" value={status} onChange={this.onChangeStatus.bind(this)} >
                      <option value="ready" label="ready" />
                      <option value="failed" label="failed" />
                      <option value="completed" label="compeleted" />
                 </select>
             <label for="psw"><b>Frequency</b></label>
                 <select name="frequency" value={frequency} onChange={this.onChangeFrequency.bind(this)} >
                      <option value="monthly" label="monthly" />
                      <option value="quaterly" label="quaterly" />
                 </select>
             <label for="psw"><b>Outage Day of Month</b></label>                
                 <input type="text" placeholder="Enter dayOfMonth"  name="dayOfMonth" value={dayOfMonth}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Outage Day of Week</b></label>
                 <input type="text" placeholder="Enter dayOfWeek"  name="dayOfWeek" value={dayOfWeek}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Hour Start</b></label>
                 <input type="text" placeholder="Enter hourStart"  name="hourStart" value={hourStart}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Minute start</b></label>
                 <input type="text" placeholder="Enter minStart"  name="minStart" value={minStart}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Outage Duration</b></label>
                 <input type="text" placeholder="Enter duration"  name="duration" value={duration}
                      onChange={this.changeHandler} required/>
             <label for="psw"><b>Take Snapshot</b></label>
                 <select name="takeSnapshot" value={takeSnapshot} onChange={this.onChangeTakeSnapShot.bind(this)} >
                      <option value="Y" label="Y" />
                      <option value="N" label="N" />
                 </select>
             <label for="psw"><b>Ksplice Status</b></label>
                 <select name="kspliceStatus" value={kspliceStatus} onChange={this.onChangeKspliceStatus.bind(this)} >
                      <option value="true" label="true" />
                      <option value="false" label="false" />
                 </select>
             <label for="psw"><b>Ksplice Reboot Required</b></label>
                 <select name="kspliceReboot" value={kspliceReboot} onChange={this.onChangeKspliceReboot.bind(this)} >
                      <option value="true" label="true" />
                      <option value="false" label="false" />
                 </select>
        <button type="submit">SUBMIT</button>
    </div>
    </form>
            </div>
        );
    }
}
export default SingleInventory;
