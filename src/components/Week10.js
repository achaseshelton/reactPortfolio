import React from 'react'
import { Row, Container } from 'react-bootstrap'

export default function Week10() {
    return (
        <Container className="border border-primary border-2 text-primary fw-bold m-2">
            <Row>
                <h1 className="text-center text-primary">Week 10</h1>
            </Row>
            <Row>
                <h3 className="text-center text-primary">Hooks and Router!</h3>
            </Row>
            <p>The last 3 weeks of react have been mind blowing. After 7 weeks of vanilla JavaScript with HTML and CSS, react has completely changed how I can approach
            each problem. Being able to do all of my coding within 1 single page of JavaScript instead of JavaScript and HTML is great. Being able to apply all of The
            things that I have learned these past 3 weeks to my own portfolio has been great. It makes it so much easier and with the introduction of router this week
            being able to show data on multiple "pages" while still only having 1 page is awesome.
            </p>
            <p>For me the biggest hurdle has been syntax and being able to troubleshoot my own mistakes. I have confidence in my ability to take a problem, understand it,
            and work through the logic of how to handle that problem. The next step is taking that logic and putting it in to code. Understanding the syntax needed and
            methods to use has been a struggle at times. As we have been working through our katas in the morning and the projects my knowledge and ability to apply those
            things has grown massively. Being able to see a read line in my code and making the necessary changes to make it work has been a key step not only in my own
            confidence, but also my abilty to put out better code.
            </p>
            <p>Being a huge sports fan my original idea for my final project was to do an app that could get the scores for your favorite team. After working through our react
            projects and realizing the kind of time constraints we have make me think this might be a bit of a bridge too far. The most recent idea I have had and the one
            that I think I am going to go with has been a restaurant suggestor. My wife and I always tend to never be able to figure out where we want to go to eat. Creating
            an app that can help us out sounds great and not necessarily too far. Being able to have some data that doesnt change too often makes me think this is a bit easier
            than my earlier idea.
            </p>
        </Container>
    )
}