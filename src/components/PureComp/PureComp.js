import React, { Component, PureComponent } from 'react'
import { isPureish } from '@babel/types';

export class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count:1000
    }
    this.refCount = React.createRef();
  }

  componentDidMount() { 
    this.refCount.current.value=this.state.count
  }
  doClick = () => { 
    this.refCount.current.focus();
    this.setState({
      count:this.refCount.current.value
    })
  }
  
  render() {
    console.log('render method execution: ' + this.state.count)
    return (
      <div className="container ">
        <h5 className="col-sm-12">Pure Component Example</h5><br /><br />
        
        <input ref={this.refCount} type="number" />
        <button onClick={this.doClick}>Click</button>
        
        <ul className="mt-4 text-left">
          <li>Pure component is similiar to react component</li>
          <li>The only difference is if there is no chagne in the state, will not re-render.</li>
          <li>React component always implement shouldComponentUpdate() lifecycle method</li>
          <li>But Pure component implement it.</li>
          <li>In above example if you click on button without changing value of text box, component will not re-render, <b>but whenever you chagne text value and click than click on button, component will re-render</b></li>
          <li>but when we use react component and click on button without changing value component always re-render</li>
        </ul>
        
      </div>
    )
  }
}

export default PureComp;
