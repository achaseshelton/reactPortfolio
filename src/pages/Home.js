import React from 'react'
import { Row, Col } from "react-bootstrap"

export default function Home() {
    return (
        <>
        <Row classname="m-3">
            <Col className="text-center text-primary display-2 fw-bolder col-12">
                Chase Shelton
            </Col>
            <Col className="text-center text-success display-5 col-12">
                Full Stack Web Developer
            </Col>
            <Col className="text-center col-12">
                <img className="image-fluid" src="./img/chase.jpg" />
            </Col>
            <Col classname="text-center text-primary col-12">
                See what I've been <a href="https://github.com/achaseshelton">building</a>!
            </Col>
        </Row>         
        </>
    )
}
