import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu width={ '30%' }>
        <a id="home" className="menu-item" href="https://www.facebook.com/benson.sanga?ref=bookmarks">Facebook</a>
        <a id="about" className="menu-item" href="/about">instagram</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Projects</a>
      </Menu>
    );
  }
}

export default Sidebar;