import React from 'react'
import Proptype from 'prop-types'
import { Link } from "react-router-dom";
import './App.css'
export default function Navbar(props) {
  return (
    <div>

      <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a href="/" className={`nav-link text-${props.mode==='light'?'dark':'light'}`} ><h4>News Panda</h4></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/business" className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" >Business</a></li>
              <li className="nav-item">
                <a href="/entertainment" className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" >Entertainment</a></li>
              <li className="nav-item">
                <a href="/sports" className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" >Sports</a></li>
              <li className="nav-item">
                <a href="/health" className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" >Health</a></li>
              <li className="nav-item">
                <a href="/science" className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" >Science</a></li>
              <li className="nav-item">
                <a href="/technology" className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" >Technology</a></li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"onClick={props.ToggleMode}/>
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >{props.Txt}</label>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
