import { Link } from 'react-router-dom';
import useReview from '../../DataHook/DataHook';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
  const [reviews, setReviews] = useReview([]);
  return (
    <div className='p-3'>
      <div className='row'>
        <div className='col-md-7'>
          <h1 className='my-5 ship-text'>BlackPearl <br />The Dream Ship</h1>
          
          <p className='mt-4'>It's a Ship of dream.
            It's not just a keel and a hull and a deck and sails.There is a story behind each things in the ship. <br /> If it's alive it can tell story of All.Every part of the ship witness of the incidents of victory and defeat.</p>
        </div>
        <div className='col-md-5 img-fluid ship-img'>
          <img className='img-fluid' src={"https://ae01.alicdn.com/kf/HTB1Ao39JpXXXXX4XFXXq6xXFXXXo/221108177/HTB1Ao39JpXXXXX4XFXXq6xXFXXXo.jpg?size=91222&height=810&width=640&hash=0f686c4e570d2ec7d8f11a6429a4dede"} alt="" />
        </div>
      </div>
      <h1 className='mt-3'>Customers Reviews</h1>

      <div className=" row row-cols-1 row-cols-md-3 mt-5">
        

        {
          reviews.slice(0, 3).map(review => <Review review={review} key={review.id}></Review>)
        }
      </div>
      <div>

        <Link to="/review"><button type="button" class="btn btn-secondary fs-5 w-25 my-5">All Reviews</button></Link>
      </div>
    </div>
  );
};

export default Home;