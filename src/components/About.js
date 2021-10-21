import React from 'react'

export default function About() {
    return (
        <div className="container">
            <div className="row text-primary display-2 fw-bolder">
                <div className="col text-center">About Me!</div>
                </div>
            <div className="row text-center text-primary fw-bold h3">
                <p>Welcome to my Portfolio. Please take a look at my projects and my blog about my journey through the Awesome Inc Bootcamp.</p>
                <p>I have always had a great love of computers, but most of my time was spent working on the hardware side before starting the bootcamp. It has been a great experience
                so far. There is always something new just around the corner and I am looking forward to continue learning and growing my scope of knowledge when it comes to coding.
               </p>
               <p>In my free time you will most likely find me spending time with my wife Katie and our 2 daughters Ava and Cora. I also enjoy cooking, traveling, building, and watching
                   and playing sports. 
               </p>
            </div>
            <div className="d-flex justify-content-center">
            <img src="./img/disney.jpg"></img>
            </div>
        </div>
    )
}
