import React from 'react'
import { Row, Col } from "react-bootstrap"

export default function Home() {
    return (
        <>
            <Row classname="m-3">
                <Col className="text-center text-primary display-2 fw-bolder col-12">
                    Chase Shelton
            </Col>
                <Col className="text-center text-success h1 col-12">
                    Full Stack Web Developer
            </Col>
                <Col className="col-12">
                     <div className="text-center text-primary h3 fw-bold">
                        See what I've been <a href="https://github.com/achaseshelton" target="_blank">building</a>!
                    </div>
                </Col>
            </Row>
        </>
    )
}
