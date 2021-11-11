import React from 'react'
import { Row, Container } from 'react-bootstrap'

export default function Week1() {
    return (
        <Container className="border border-primary border-2 m-2 bg-white">
            <Row>
            <h1 className="text-center text-success fw-bold">Week 1</h1>
            </Row>
            <Row>
                <h3 className="text-center text-success fw-bold">The Beginning</h3>
            </Row>
            <p className="text-primary">This first week of bootcamp has been quite the experience. It started with meeting my fellow bootcampers and instructors to begin the process of learning
                 about coding. My first week has gone well.</p>
            <p className="text-primary">There were definitely some things that I didn't expect, like using the terminal to start and submit code to a repository. I think going in it was hard to know exactly
            what to expect, since I have never really done anything like this before. I also learned that when it comes to using codeanywhere and github, its the small things
            that count. Something as simple as saving can make all the difference. This first week has followed a somewhat similar path to prework.</p>
            <p className="text-primary">I am excited to learn more about styling and making the blog page look a little more presentable. I was able to complete an "Intro to Web Pages" module on
            grasshopper to get me started, and I am looking forward to learning more and being able to apply that to my own blog and help you learn more about who I am. I also
            am looking forward to learning and using the Command Line Interface more.</p>
            <p className="text-primary">This blog is going to be a place where I can showcase my increasing digital literacy and progress as we make our way through the bootcamp. I look forward to sharing
            my path including my successes, trials, and what projects I am working on.</p>
        </Container>
    )
}
