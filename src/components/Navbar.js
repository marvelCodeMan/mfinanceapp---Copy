import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="home">
                <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="about">
                <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="/">{props.aboutText}</a>
              </li>
              <li className="Login">
                <Link to="/Login" className={`nav-link text-${props.mode==='light'?'dark':'light'}`}> Login</Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark':'Light'} mode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'Set about text here'
  // Using this, even if props are not passed, they will be taken default values. But most of the time, it is always required to pass the values.
}