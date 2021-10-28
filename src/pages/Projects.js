import React from 'react'
import { Row, Col, Container, Card, Button } from "react-bootstrap"

export default function Projects() {
    return (
        <Container>
            <Row className="row row-cols-2 m-3">
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/tictactoe.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-primary fw-bold text-center">Tic-Tac-Toe</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Classic Tic-Tac-Toe game using OOP and MVC. Styled with bootstrap.
                            </Card.Text>
                            <Button href="https://achaseshelton.github.io/ticTacToe/" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/achaseshelton/ticTacToe" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/restaurant.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-primary fw-bold text-center">React Restaurant</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Our first react project. Made using a given API call. Styled with bootstrap
                            </Card.Text>
                            <Button href="https://react-restaurant-be881.web.app/" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/achaseshelton/reactRestaurant" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/todo.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-primary fw-bold text-center">To-Do List</Card.Title>
                            <Card.Text className="text-primary text-center">
                                A to-do list page made using react and local storage. Styled with bootstrap.
                            </Card.Text>
                            <Button href="https://react-todolist-2c0e5.web.app/" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/achaseshelton/reactToDoList" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2">
                        <Card.Img variant="top" src="./img/mindreader.png" className="cardimg" />
                        <Card.Body className="border border-primary">
                            <Card.Title className="text-primary fw-bold text-center">Mind Reader</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Mind Reader game. A project with a focus on state. Styled using Bootstrap
                            </Card.Text>
                            <Button href="https://achaseshelton.github.io/mindReader/" className="m-2 float-start" variant="success">Project</Button>
                            <Button href="https://github.com/achaseshelton/mindReader" className="m-2 float-end" variant="success">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
