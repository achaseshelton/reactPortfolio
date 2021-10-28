import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div as={Link} to="/" className="navbar-brand text-success fw-bold" >Chase Shelton</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div as={Link} to="/projects" className="nav-link text-success fw-bold">Portfolio</div>
                        </li>
                        <li className="nav-item">
                            <div as={Link} to="/blog" className="nav-link text-success fw-bold">Blog</div>
                        </li>
                        <li className="nav-item">
                            <div as={Link} to="/about" className="nav-link text-success fw-bold">About Me!</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <ul className="list-group list-group-horizontal d-flex float-end">
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://www.facebook.com/chase.shelton.963">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://www.linkedin.com/in/austen-shelton-2a7371224/">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://twitter.com/acshelton412">
                            <i class="bi bi-twitter"></i>
                        </a>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://github.com/achaseshelton">
                        <i class="bi bi-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
