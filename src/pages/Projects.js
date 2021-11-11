import React from 'react'
import { Row, Col, Container, Card, Button } from "react-bootstrap"

export default function Projects() {
    return (
        <Container>
            <Row className="row row-cols-1 row-cols-md-2 m-3">
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/weatherapp.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-success fw-bold text-center">Weather App</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Weather App, made using HTML, CSS, Javascript and an free weather API call.
                            </Card.Text>
                            <Button href="https://achaseshelton.github.io/weatherApp" target="_blank" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/achaseshelton/weatherApp" target="_blank" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/restaurant.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-success fw-bold text-center">React Restaurant</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Restaurant menu. Made with React and an API call. Styled with bootstrap.
                            </Card.Text>
                            <Button href="https://react-restaurant-be881.web.app/" target="_blank" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/achaseshelton/reactRestaurant" target="_blank" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/constable.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-success fw-bold text-center">Ted Lass Constable</Card.Title>
                            <Card.Text className="text-primary text-center">
                                A fake constable campaign site made using HTML, CSS, and Javascript.
                            </Card.Text>
                            <Button href="https://achaseshelton.github.io/tedLassoConstable/" target="_blank" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/achaseshelton/tedLassoConstable" target="_blank" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/catsteves.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-success fw-bold text-center">Fishing Hooks Website</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Built a fishing gear website, using React and API's with fellow students.
                            </Card.Text>
                            <Button href="https://cat-steves.web.app/" target="_blank" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/amills25/FishingGroup" target="_blank" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
