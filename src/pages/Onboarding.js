import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Week1 from '../components/Week1'
import Week2 from '../components/Week2'
import Week3 from '../components/Week3'
import Week4 from '../components/Week4'


export default function Onboarding() {
    return (
        <Container>
            <Row className="d-flex justify-content-center text-primary display-3 fw-bolder">
                Onboarding Journey
            </Row>
            <Row  className="d-flex justify-content-center">
                <Week1 />
            </Row>
            <Row  className="d-flex justify-content-center">
                <Week2 />
            </Row>
            <Row  className="d-flex justify-content-center">
                <Week3 />
            </Row>
            <Row  className="d-flex justify-content-center">
                <Week4 />
            </Row>
        </Container>
    )
}
