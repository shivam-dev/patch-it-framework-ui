import React, { Component } from 'react';
import './index.css';
import './modal.css';
import './App.scss'

class Form1 extends Component {

    getInitialState() {
        return {
            body: this.props.hostName || 'some body',
            title: this.props.ip || 'some title'
        }
    }

    handleBodyChange(e) {
        this.setState({
            body: e.target.value
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form class="modal-content animate" onSubmit={this.handleSubmit}>

    <div class="container">
      <label for="uname"><b>HOSTNAME</b></label>
      <input type="text" placeholder="Enter Username" name="uname"  
                                   required="required"
                                   value={this.state.hostName}
                                   onChange={this.handleTitleChange} />

      <label for="psw"><b>IPADDRESS</b></label>
     <input type="text" placeholder="Enter Username"  name="uname" value={this.state.ip}
                                   onChange={this.handleTitleChange} required/>
        <button type="submit">SUBMIT</button>
    </div>
    </form>
        );
    }
}

export default Form1;