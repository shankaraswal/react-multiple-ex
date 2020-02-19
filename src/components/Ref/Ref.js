import React, { Component } from 'react'

export class Ref extends Component {
  constructor(props) { 
    super(props)

    this.fnameRef = React.createRef();
    this.lnameRef = React.createRef();
    this.phoneRef = React.createRef();
    this.cityRef = React.createRef();
    this.stateRef = React.createRef();
  }
  componentDidMount() { 
    this.cityRef.current.focus();
  }

  doFocusFirstName = () => {
    this.fnameRef.current.focus();
  }


  doFocusLastName = () => {
    this.lnameRef.current.focus();
  }

  doFocusCity = () => {
    this.cityRef.current.focus();
  }

  doFocusPhone = () => {
    this.phoneRef.current.focus();
  }

  doFocusState = () => {
    this.stateRef.current.focus();
  }


  render() {
    return (
      <div className="container row ">
        <h5 className="">Intial focus will be on City Name: on component mount</h5><br /><br /><br /><br />
       <div className="col-sm-6 text-right"> 
          <input type="text" placeholder="First Name" name="fname" ref={this.fnameRef} /><br /><br />
          <input type="text" placeholder="Last Name" name="lname" ref={this.lnameRef} /><br /><br />
          <input type="text" placeholder="Phone Number" name="phone" ref={this.phoneRef} /><br /><br />
          <input type="text" placeholder="City Name" name="city" ref={this.cityRef} /><br /><br />
          <input type="text" placeholder="State Name" name="state" ref={this.stateRef} /><br /><br />
        </div>

        <div className="col-sm-6 text-left"> 
          <button onClick={this.doFocusFirstName}>Click to Foucs on First Name</button><br /><br />
          <button onClick={this.doFocusLastName}>Click to Foucs on Last Name</button><br /><br />
          <button onClick={this.doFocusPhone}>Click to Foucs on Phone</button><br /><br />
          <button onClick={this.doFocusCity}>Click to Foucs on City</button><br /><br />
          <button onClick={this.doFocusState}>Click to Foucs on State</button><br /><br />
        </div>
      </div>
    )
  }
}

export default Ref
