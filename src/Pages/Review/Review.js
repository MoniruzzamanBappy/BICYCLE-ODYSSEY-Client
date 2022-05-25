import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ReviewSingle from './ReviewSingle';

const Review = () => {
    const {isLoading, data: reviews } = useQuery(["reviews"], () =>
    fetch(`https://bicycle-odyssey.herokuapp.com/reviews`).then((res) => res.json())
  );
  if(isLoading){
      return <Loading />
  }
  console.log(reviews);
    return (
        <div>
             <h1 className="text-4xl font-extrabold text-bold text-center">
        All Reviews
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
        {reviews.reverse().map((item) => (
          <ReviewSingle key={item._id} item={item}></ReviewSingle>
        ))}
      </div>
        </div>
    );
};

export default Review;