import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="container">
            <div className="row">
              <h1> A Random quiz </h1>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;