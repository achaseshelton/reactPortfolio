import React from 'react'
import { Container } from 'react-bootstrap'

export default function Week9() {
    return (
        <Container className="border border-primary border-2 text-primary fw-bold m-2">
            <h1 className="text-center text-primary">Week 9</h1>
            <h3 className="text-center text-primary">Local Storage</h3>
            <p>When I first accepted my place in the bootcamp, I had some thoughts on what coding was going to be like, but obviously not completely sure. One of the
                first things we did when we started actually coding was using the CLI or command line interface. When our instructors first told us to get used to using
                this CLI because we were going to be using it a lot I was honestly a bit anxious. It seemed at the time to be tough to use. As the weeks have passed using
                the CLI has become second nature and my knowledge for what commands I need when are almost an afterthough. Its almost hard to belive that I could have been
                anxious about something so simple.
            </p>
            <p>I think for me the thing I dislike most about the CLI is the amount of different commands there are and how many commands you need to use to accomplish a
                particular task is more than I like. I definitely would like to be able to combine some tasks, so that everytime I need to upload my progress to github I
                dont have to type, git add, git commit, and git push. Simplifying some of these things would make life a lot easier.
            </p>
            <p>As we have used react more and introduced some of the more advanced features of it I have come to realize just how much less code I am actually writing. Even
                comparing my first react project to my most recent react project is kind of staggering. I think frameworks make the process much easier. When we first started
                we had to write what we wanted to appear on the page in HTML, then we had to add some CSS if we wanted to change colors, or size, or weights, then we had to add
                JavaScript to manipulate things the way we wanted to solve the problem. With frameworks like react I just write my logic and what I want to show up on the page
                all in one file, coding is so much simpler this way.
            </p>
        </Container>
    )
}