import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import weShineLogo from '../image/weshinelogo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>

          {/* Brand */}
          <a className="navbar-brand" href="/home">
            <img src={weShineLogo} height="25" alt="WeShine Logo" loading="lazy" />
            <span style={{"margin":"10px","color":"white"}}>WESHINE TECH</span>
          </a>

          {/* Search form */}
          {/* <form className="d-none d-md-flex input-group w-auto my-auto">
            <input autoComplete="off" type="search" className="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)' style={{ minWidth: '225px' }} />
            <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
          </form> */}

          {/* Right links */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* Notification dropdown */}
            <li className="nav-item dropdown">
              <a data-mdb-dropdown-init className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>

            {/* Icon */}
            <li className="nav-item">
              <a className="nav-link me-3 me-lg-0" href="#">
                <i className="fas fa-fill-drip"></i>
              </a>
            </li>

            {/* Icon */}
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>

            {/* Icon dropdown */}
            <li className="nav-item dropdown">
              <a data-mdb-dropdown-init className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown"
                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="united kingdom flag m-0"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#"><i className="united kingdom flag"></i>English
                    <i className="fa fa-check text-success ms-2"></i></a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {/* Other language options */}
              </ul>
            </li>

            {/* Avatar */}
            <li className="nav-item dropdown">
              <a data-mdb-dropdown-init className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
                  height="22" alt="Avatar" loading="lazy" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
