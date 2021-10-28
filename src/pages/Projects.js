import React from 'react'
import { Row, Col, Container, Card } from ""

export default function Projects() {
    return (
        <Container>
            <Row className="row row-cols-2">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./img/tictactoe.png" />
                        <Card.Body>
                            <Card.Title className="text-success fw-bold text-center">Tic-Tac-Toe</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Classic Tic-Tac-Toe game made using Object Oriented Programming with a focus on MVC desing philosophy. Styled with bootstrap.
                            </Card.Text>
                            <Button href="https://achaseshelton.github.io/ticTacToe/" variant="primary">Project</Button>
                            <Button href="https://github.com/achaseshelton/ticTacToe" variant="primary">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./img/restaurant.png" />
                        <Card.Body>
                            <Card.Title className="text-success fw-bold text-center">React Restaurant</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Our first react project. Made using a given API call. Styled with bootstrap
                            </Card.Text>
                            <Button href="https://react-restaurant-be881.web.app/" variant="primary">Project</Button>
                            <Button href="https://github.com/achaseshelton/reactRestaurant" variant="primary">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./img/todo.png" />
                        <Card.Body>
                            <Card.Title className="text-success fw-bold text-center">To-Do List</Card.Title>
                            <Card.Text className="text-primary text-center">
                                A to-do list page made using react and local storage. Styled with bootstrap.
                            </Card.Text>
                            <Button href="https://react-todolist-2c0e5.web.app/" variant="primary">Project</Button>
                            <Button href="https://github.com/achaseshelton/reactToDoList" variant="primary">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./img/mindreader.png" />
                        <Card.Body>
                            <Card.Title className="text-success fw-bold text-center">Mind Reader</Card.Title>
                            <Card.Text className="text-primary text-center">
                                Mind Reader game. A project with a focus on state. Styled using Bootstrap
                            </Card.Text>
                            <Button href="https://achaseshelton.github.io/mindReader/" variant="primary">Project</Button>
                            <Button href="https://github.com/achaseshelton/mindReader" variant="primary">Repository</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
