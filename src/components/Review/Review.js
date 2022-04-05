import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../ReviewList/ReviewList.css'

const Review = (props) => {
    const { name, img, review, ratings } = props.review;
    return (
        <div>
            
            <div className="col mt-3">
                <div className="card w-75 mx-auto width">
                    <div class="card-body">
                        <h5 class="card-title">Name:{name}</h5>
                        <p>Review:{review}</p>
                        <p>Ratings:{ratings}</p>
                        <Rating
                            initialRating={ratings}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </div>
                    <img className='p-3 mx-auto' src={img}  alt="..." />

                </div>

            </div>
        </div>
    );
};

export default Review;