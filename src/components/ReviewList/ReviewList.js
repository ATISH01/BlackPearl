import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ReviewList.css'


const ReviewList = (props) => {
    const { name, img, review, ratings } = props.reviewList;
    return (
        <div className='margin'>
            <div className="col p-3">
                <div className="card width">
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
                    <img className='p-3 rounded ' src={img} class="card-img-top" alt="..." />

                </div>

            </div>
        </div>
    );
};

export default ReviewList;