import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Button, NavDropdown } from 'react-bootstrap'

export default function Menu() {
    return (
        <Nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Nav.Link as={Link} to="/" className="navbar-brand text-success fw-bold" >Chase Shelton</Nav.Link>
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Nav.Link as={Link} to="/projects" className="nav-link text-success fw-bold">Portfolio</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={Link} to="/about" className="nav-link text-success fw-bold">About Me!</Nav.Link>
                        </li>
                        <li>
                            <NavDropdown title="Blog" className="text-success fw-bolder" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/onboarding" className="nav-link text-success fw-bold">Onboarding</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/frontend" className="nav-link text-success fw-bold">Front End</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/backend" className="nav-link text-success fw-bold">Back End</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <ul className="list-group list-group-horizontal d-flex float-end">
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://www.facebook.com/chase.shelton.963" target="_blank" className="text-success">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://www.linkedin.com/in/austen-shelton-2a7371224/" target="_blank" className="text-success">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://twitter.com/acshelton412" target="_blank" className="text-success">
                            <i class="bi bi-twitter"></i>
                        </a>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <a href="https://github.com/achaseshelton" target="_blank" className="text-success">
                            <i class="bi bi-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}
