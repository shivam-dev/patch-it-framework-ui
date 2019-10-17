import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import './modal.css';
import './App.scss'



class ImportInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
                 <form class="modal-content animate" onSubmit={this.handleSubmit}>

    <div class="container">
      <label for="uname"><b>UPLOAD IVENTORY</b></label>
      <input type="file" placeholder="Enter Username" name="uname" required/>

        <button type="submit">SUBMIT</button>
    </div>
    </form>
    );
  }
}
export default ImportInventory;
