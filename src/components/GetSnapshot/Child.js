import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       childCount:100
    }
  }
  componentDidUpdate(props, state, snap) { 
    console.log('child componentdidupdate', props, state)

  }
  
  getSnapshotBeforeUpdate(preProps, preState) { 
    console.log('preProps', preProps, 'CurrentProps', this.props);
    return null
  }
  getLocalStateVal = () => { 
    this.setState({
      childCount:this.state.childCount+10
    })

  }
  render() {
    return (
      <div className="bg-danger mt-4" style={{ 'padding': '10px', 'color': '#fff'}} >
        <h3>GetSnapshotBeboreUpdate child component</h3><br />
        <h1>Props Count: {this.props.data}</h1>
        <h2>Child Count: {this.state.childCount}</h2>
        <button className="btn btn-info" onClick={this.getLocalStateVal}>Update Local State</button>
      </div>
    )
  }
}


