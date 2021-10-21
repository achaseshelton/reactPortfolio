import React from 'react'

export default function Menu() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-success fw-bold" href="">Chase Shelton</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-success fw-bold" href="">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-success fw-bold" href="">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-success fw-bold" href="">About Me!</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <ul className="list-group list-group-horizontal d-flex float-end">
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <i class="bi bi-facebook"></i>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <i class="bi bi-linkedin"></i>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <i class="bi bi-twitter"></i>
                    </li>
                    <li className="list-group-item text-success bg-dark fw-bold">
                        <i class="bi bi-github"></i>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
