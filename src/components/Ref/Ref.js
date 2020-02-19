import React, { Component } from 'react'

export class Ref extends Component {
  constructor(props) { 
    super(props)

    this.state = {
      fname:"firstname"
    }

    this.fnameRef = React.createRef();
    this.lnameRef = React.createRef();
    this.phoneRef = React.createRef();
    this.cityRef = React.createRef();
    this.stateRef = React.createRef();
  }
  componentDidMount() { 
    this.cityRef.current.focus();
    this.fnameRef.current.value = this.state.fname;
  }


  doFocusFirstName = (e) => {
    const fname = this.fnameRef.current;
    fname.focus();
    this.setState({
      fname:fname.value
    })
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
    console.log(this.state.fname);
    return (
      <div className="container">
        <h5 className="col-sm-12">Intial focus will be on City Name: on componentDidMount()</h5><br /><br />
        <div className="row">
       <div className="col-sm-6 text-right"> 
          <div className={this.state.fname!= '' ? 'bg' : 'bg-info'}>
            <input type="text" placeholder="First Name" defaultValue={this.state.fname} name="fname" ref={this.fnameRef} /><br /><br />
            <input type="text" placeholder="Last Name" name="lname" ref={this.lnameRef} /><br /><br />
            <input type="text" placeholder="Phone Number" name="phone" ref={this.phoneRef} /><br /><br />
            <input type="text" placeholder="City Name" name="city" ref={this.cityRef} /><br /><br />
            <input type="text" placeholder="State Name" name="state" ref={this.stateRef} /><br /><br />
          </div>
        </div>

        <div className="col-sm-6 text-left"> 
          <button onClick={(e)=>this.doFocusFirstName(e)}>Click to Foucs on First Name</button><br /><br />
          <button onClick={this.doFocusLastName}>Click to Foucs on Last Name</button><br /><br />
          <button onClick={this.doFocusPhone}>Click to Foucs on Phone</button><br /><br />
          <button onClick={this.doFocusCity}>Click to Foucs on City</button><br /><br />
          <button onClick={this.doFocusState}>Click to Foucs on State</button><br /><br />
          </div>
          </div>
      </div>
    )
  }
}

export default Ref
