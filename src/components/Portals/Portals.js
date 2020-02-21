import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portals extends Component {
  render() {
    return ReactDOM.createPortal(
          <div>
            <h1>This content is in outer div which is sibling for 'root' placeholder, using portal</h1>
      </div>, document.getElementById('root-outer')
      
      )
  }
}
