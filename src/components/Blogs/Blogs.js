import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Answer to the given Questions?</h2>
            <h4>What is context api?</h4>
            <p><h5>Answer:</h5>Context api is method of send data Parents to desired child or sub child component.The other method of sending data component id props.It is the process that called props drilling.This method is so lenghty.To avoid this data passing system.Contex api is used in react.It's increase the performance and also reduce the redundance.</p>
            <h4>What is sementic tag?</h4>
            <p><h5>Answer:</h5>Sementic tag is the HTML elements.It's described the real meaning of the content type to human.It makes the HTML markup language more definealbe.For example use use h1 tag to described header of the content. Each html sementic tag has meaningful purpuse.</p>
        </div>
    );
};

export default Blogs;