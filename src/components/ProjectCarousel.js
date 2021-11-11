import React from 'react'
import { Carousel, Card, Col, Row, Button } from 'react-bootstrap'

export default function ProjectCarousel() {
    return (
        <Row>
            <Col className="col-3"></Col>
            <Col className="col-6">
            <Carousel indicators={false} nextLabel={null} prevLabel={null} fade={true} className="projects">
                <Carousel.Item interval={3000} className="carouselitem" pause="hover">
                    <Card.Img variant="top" src="./img/tictactoe.png" className="carouselimg" />
                    <Card.Body className="border border-primary bg-white">
                        <Card.Title className="text-success fw-bold text-center">Tic-Tac-Toe</Card.Title>
                        <Card.Text className="text-primary text-center">
                            Classic Tic-Tac-Toe game using OOP and MVC. Styled with bootstrap.
                            </Card.Text>
                            {/* <Card.Link href="https://achaseshelton.github.io/ticTacToe" target="_blank" className="m-2 float-start text-success">Project</Card.Link>
                            <Card.Link href="https://github.com/achaseshelton/ticTacToe" target="_blank" className="m-2 float-end text-success">Repository</Card.Link> */}
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={3000} className="carouselitem" pause="hover">
                    <Card.Img variant="top" src="./img/todo.png" className="carouselimg" />
                    <Card.Body className="border border-primary bg-white">
                        <Card.Title className="text-success fw-bold text-center">To-Do List</Card.Title>
                        <Card.Text className="text-primary text-center">
                            A to-do list page made using react and local storage. Styled with bootstrap.
                            </Card.Text>
                            {/* <Card.Link href="https://achaseshelton.github.io/weatherApp" target="_blank" className="m-2 float-start text-success">Project</Card.Link>
                            <Card.Link href="https://github.com/achaseshelton/reactToDoList" target="_blank" className="m-2 float-end text-success">Repository</Card.Link> */}
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item interval={3000} className="carouselitem" pause="hover">
                    <Card.Img variant="top" src="./img/mindreader.png" className="carouselimg" />
                    <Card.Body className="border border-primary bg-white">
                        <Card.Title className="text-success fw-bold text-center">Mind Reader</Card.Title>
                        <Card.Text className="text-primary text-center">
                            Mind Reader game. A project with a focus on state. Styled using Bootstrap
                            </Card.Text>
                            {/* <Card.Link href="https://react-todolist-2c0e5.web.app" target="_blank" className="m-2 float-start text-success">Project</Card.Link>
                            <Card.Link href="https://github.com/achaseshelton/mindReader" target="_blank" className="m-2 float-end text-success">Repository</Card.Link> */}
                    </Card.Body>
                </Carousel.Item>
            </Carousel>
            </Col>
            <Col className="col-3"></Col>            
        </Row>
    )
}
