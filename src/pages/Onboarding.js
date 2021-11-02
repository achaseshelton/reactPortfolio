import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Week1 from '../components/Week1'
import Week2 from '../components/Week2'
import Week3 from '../components/Week3'
import Week4 from '../components/Week4'


export default function Onboarding() {
    return (
        <Container className="d-flex justify-content-center">
            <Row className="text-center text-primary display-3">
                Onboarding Journey
            </Row>
            <Week1 />
            <Week2 />
            <Week3 />
            <Week4 />
        </Container>
    )
}
