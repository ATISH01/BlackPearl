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
            <h4>DifferenceBetween Inline,BLock and Inline-Block?</h4>
            <p><h5>Answer:</h5>
            <h6>Inline:Inline takes space as it needs.Inline element appears on side by side.It's starts at the same line.Height and width cannot be adjusted.</h6>
            <h6>Block:It always starts on new line.Margin and padding automatically added.Height and width are customizable</h6>
            <h6>Inline-Block:We can declare inline element to a block elememt.And it's called inline-block element.We can cutomize it like block element.</h6>
            </p>
        </div>
    );
};

export default Blogs;