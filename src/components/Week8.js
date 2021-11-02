import React from 'react'
import { Container } from 'react-bootstrap'

export default function Week8() {
    return (
        <Container className="border border-primary border-2 text-primary fw-bold m-2">
            <h1 className="text-center text-primary">Week 8</h1>
            <h3 className="text-center text-primary">React</h3>
            <p>We started using react this week and it has been a very refreshing change. Being able to use classes and functional components to help render items to a page
                without actually using any html code has been awesome. This is what makes different frameworks and libraries really easy to use. Having rules and structure
                within the javscript code is great. Each component in react has a render method which tells the program what to show on the page. Some components can simply
                use the render method, while others can have methods and constructors that take data and can change what you actually render to the page.
            </p>
            <p>React for me has been a game changer and we still have more to learn about more functionality within react. There are some things on the horizon like hooks and
                router that make solving complex problems a breeze. These new things are definitely something I am looking forward to learning more about. I also think it will
                great to learn more languages and frameworks that have structures and rules similar to react.
            </p>
            <p>The JavaScript tool that I am most looking forward to learning more about for use in my final project is sass. For most of our in person journey so far we have been
                using bootstrap and frankly that has been quite a struggle for me. I have made some strides, but I still think the design aspect of my projects so far have been a
                bit lacking. One thing I really want to improve on when it comes to my final project is design. I want to make sure what I am going to show potential employers not
                only works well, but looks great. Sass seems to be a great inbetween for modifying the bootstrap defualts and being able to make them more custom to what I want.
            </p>
        </Container>
    )
}