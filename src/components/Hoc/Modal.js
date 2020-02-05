import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const xx = { ...this.props.mydetail };
    console.log(xx)
    return (
        <div
          className="modal-wrapper"
          style={{
            transform: this.props.show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
        <h2>i am a modal {xx.name} component</h2>
          <button onClick={this.props.getMemberData} className="btn btn-primary my-2">Get {xx.name} Detail</button>
          <div className="modal-body">
              <h5>Name: {xx.name}<br/><br/>
              Job:{xx.type}<br /><br/>
              Age: {xx.myage}<br/><br/>
              Class: {xx.class}</h5>
          </div>
          <button className="btn btn-danger mb-4" onClick={this.props.close}>
            Close
          </button>
        </div>
    );
  }
}

export default Modal;
