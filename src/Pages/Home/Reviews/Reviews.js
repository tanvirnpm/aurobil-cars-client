import React from "react";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const reviews = [
    {
      title: "Wide range of brands",
      description:
        "With a wide range of innovative vehicle model, this car brand has always been known for its reliability and luxury status. This automobile company has always...",
      image: "https://webtoolfeed.files.wordpress.com/2011/12/1.jpg",
    },
    {
      title: "Trusted by our clients",
      description:
        "Take them to the car and give complete details of the car. Also ask them to have a test drive and have thorough experience of handling the car, the comfort, ride quality etc.",
      image: "https://webtoolfeed.files.wordpress.com/2011/12/4.jpg",
    },
    {
      title: "Fast & easy financing",
      description:
        "At Link Motors, we believe everyone deserves vehicle financing. We work with all types of credit from good to average to bad. With the Link Motors FAST AND EASY...",
      image: "https://wisdmlabs.com/site/wp-content/uploads/2018/05/brock.jpg",
    },
  ];
  return (
    <section className="container pt-5">
      <h1 className="text-center mb-4">Our Clients Review</h1>
      <div className="row g-3">
        {reviews.map((review, index) => (
          <ReviewsCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
