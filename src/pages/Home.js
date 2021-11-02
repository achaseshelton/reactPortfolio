import React from 'react'
import { Row, Col } from "react-bootstrap"

export default function Home() {
    return (
        <>
            <Row className="m-3 d-flex align-items-center">
                <Col className="text-center text-primary display-2 fw-bolder col-12 m-2">
                    Chase Shelton
            </Col>
                <Col className="text-center text-success h1 col-12 m-2">
                    Full Stack Web Developer
            </Col>
                <Col className="col-12">
                    <div className="text-center text-primary h3 fw-bold m-2">
                        See what I've been <a href="https://github.com/achaseshelton" target="_blank">building</a>!
                    </div>
                </Col>
            </Row>
        </>
    )
}
