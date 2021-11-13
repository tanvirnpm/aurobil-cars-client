import React, { useEffect, useState } from "react";
import Spinner from "../../../FeedBack/Spinner";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
      fetch('https://intense-dawn-68409.herokuapp.com/get-all-reviews')
      .then(res=>res.json())
      .then(data=>setReviews(data))
      .finally(()=> setIsLoading(false))
  },[])
  
  return (
    <section className="container pt-5">
      <h1 className="text-center mb-4">Our Clients Review</h1>
      <div className="row g-3">
        {
          isLoading && <Spinner />
        }
        {reviews.map((item, index) => (
          <ReviewsCard key={index} item={item} />
        ))}
        
      </div>
    </section>
  );
};

export default Reviews;
