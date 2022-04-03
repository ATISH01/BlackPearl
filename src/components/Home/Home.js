import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../../DataHook/DataHook';
import Review from '../Review/Review';

const Home = () => {
    const [reviews,setReviews]=useReview([]);
    
    return (
        <div>
            <div className='row'>
              <div className='col-md-7'>
                <h1>BlackPearl</h1>
                <h1>The Dream Ship</h1>
              </div>
              <div className='col-md-5'>
                <img src={"https://ae01.alicdn.com/kf/HTB1Ao39JpXXXXX4XFXXq6xXFXXXo/221108177/HTB1Ao39JpXXXXX4XFXXq6xXFXXXo.jpg?size=91222&height=810&width=640&hash=0f686c4e570d2ec7d8f11a6429a4dede"} alt="" />
              </div>
            </div>
            <div>
        
                    <Link to="/review"><button type="button" class="btn btn-secondary fs-5 w-25 mt-5">Reviews</button></Link>
            </div>
            <div className="p-3 row row-cols-1 row-cols-md-3 g-4">
              
                {
                    reviews.map(review=><Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Home;