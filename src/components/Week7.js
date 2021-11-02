import React from 'react'
import { Row, Container } from 'react-bootstrap'

export default function Week7() {
    return (
        <Container className="border border-primary border-2 text-primary fw-bold m-2">
            <Row>
                <h1 className="text-center text-primary">Week 7</h1>
            </Row>
            <Row>
                <h3 className="text-center text-primary">Models, Views, and Controllers oh my!</h3>
            </Row>
            <p>This week was a great example of why pseudocode is so important to production. Pseudocode is a way for programmers to get the logic, data structers, and
            other items within our programs into simple easy to understand english. We can then take this english and make an easier transition to actual code. Taking
            the time to think through all the possible edge cases and common cases and how the program should handle each of those should theoretically make the actual
            coding take a lot less time. One of the key parts of pseudocode is figuring out what dat structures you are going to need to handle the problem. This is so
            important when doing Object-Oriented Programming. Being able to clearly define each object and the roles and resposibilities they have makes tackling the
            problem that much easier. Defining what object controls which part of the program and what function they have is key to having good pseudocode and hopefully
            having good code.
            </p>
            <p>Model, view, controller is a very common design pattern that makes it easy to define roles and resposibilities for your objects. In the MVC desing pattern
            you can use many of the pillars of object-oriented programming, while still using objects that clearly defined roles. Model, the part of your program that
            houses your stateful data, in an object that would be your constructor. View, essentially what your going to show to whomever is using your app or program.
            Controller, the methods that use the data contained in your model that help determine what to render to the view. Clearly defining each of these and having
            each part have a certain responsibility makes tackling the problem that much easier.
            </p>
        </Container>
    )
}