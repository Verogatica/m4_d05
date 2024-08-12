import React from 'react';

const Navbar = () => {
    const total = 25000;
    const separadorTotal = total.toLocaleString();
    const token = false;
    
    const buttonUno = token ? '🔓 Profile' : '🔐 Login';
    const buttonDos = token ? '🔒 Logout' : '🔐 Register';


  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="btn btn-outline-light" href="#" role="button">&#x1F355; Home</a>            
            </li>
            <li className="nav-item pe-2 ps-2">
            <a className="btn btn-outline-light" href="#" role="button">{buttonUno}</a>
            </li>
            <li className="nav-item">
            <a className="btn btn-outline-light" href="#" role="button">{buttonDos}</a>
            </li>
          </ul>
          <button className="btn btn-outline-primary" type="submit"> &#x1F6D2; Total: ${separadorTotal}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
