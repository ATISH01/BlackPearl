import React from 'react';
import useReview from '../../DataHook/DataHook';
import ReviewList from '../ReviewList/ReviewList';
import './Reviews.css'


const Reviews = () => {
    const [reviews,setReviews]=useReview([]);
    return (
        <div className="p-0 row row-cols-1 row-cols-md-3 g-4 margin">
            {
                reviews.map(reviewList=><ReviewList reviewList={reviewList} key={reviewList.id}></ReviewList>)
            }
        </div>
    );
};

export default Reviews;