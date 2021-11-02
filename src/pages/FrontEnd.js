import React from 'react'
import { Row, Container } from "react-bootstrap"
import Week5 from "../components/Week5"
import Week6 from "../components/Week6"
import Week7 from "../components/Week7"
import Week8 from "../components/Week8"
import Week9 from "../components/Week9"
import Week10 from "../components/Week10"

export default function FrontEnd() {
    return (
        <Container>
            <Row className="d-flex justify-content-center text-primary display-3 fw-bolder">
                Front End
            </Row>
            <Row className="d-flex justify-content-center">
                <Week5 />
            </Row>
            <Row className="d-flex justify-content-center">
                <Week6 />
            </Row>
            <Row className="d-flex justify-content-center">
                <Week7 />
            </Row>
            <Row className="d-flex justify-content-center">
                <Week8 />
            </Row>
            <Row className="d-flex justify-content-center">
                <Week9 />
            </Row>
            <Row className="d-flex justify-content-center">
                <Week10 />
            </Row>
        </Container>

    )
}
