import React from 'react'
import propTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <>
            <nav className={` navbar container navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active m-3" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                        <div className={`container form-check form-switch m-3 text-${props.mode=== 'light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.togleMode} type="checkbox" role="switch"    id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    title: propTypes.string.isRequired,
    aboutText: propTypes.string
}