import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import DropdownMenu, { NestedDropdownMenu } from 'react-dd-menu';


class Navbar extends Component {
  constructor(props) { 

    super(props);
    this.state = { isMenuOpen: false };
  }
   
  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close = () => {
    this.setState({ isMenuOpen: false });
  };

  click = () => {
    console.log('You clicked an item');
  };

  render() {
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: <button type="button" onClick={this.toggle}>Click me!</button>,
      align: 'right',
    };

    const nestedProps = {
      toggle: <NavLink className="nav-link" to="/hoc">HOC</NavLink>,
      animate: true,
    };

    return (
      <nav className="navbar navbar-right">
        <ul className="nav justify-content-end">
        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/toast">Toastify</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/modal">Modal</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/crop">Screen Cropper</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/dark">Dark Mode</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/memb">Hoc</NavLink></li>
          {/*<NestedDropdownMenu {...nestedProps}>
            <ul className="submenu">
              <li className="nav-item"><NavLink className="nav-sub-link" to="/mema">Member A</NavLink></li>
              <li className="nav-item"><NavLink className="nav-sub-link" to="/memb">Member A</NavLink></li>
            </ul>

    </NestedDropdownMenu>*/}
        </ul>
      </nav>
    )
  }
}

export default Navbar
