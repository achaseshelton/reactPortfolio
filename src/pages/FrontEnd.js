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
        <Container className="d-flex justify-content-center">
            <Row className="text-center text-primary display-3">
                Front End
            </Row>
            <Week5 />
            <Week6 />
            <Week7 />
            <Week8 />
            <Week9 />
            <Week10 />
        </Container>

    )
}
