import React from 'react';

const Review = (props) => {
    const { name, img, review,ratings } = props.review;
    return (
        <div>
            <h1>{props.review.length}</h1>
            <div className="col">
                <div className="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Name:{name}</h5>
                        <p>Review:{review}</p>
                        <p>Ratings:{ratings}</p>
                    </div>
                    <img className='p-3 rounded' src={img} class="card-img-top" alt="..." />

                </div>

            </div>
        </div>
    );
};

export default Review;