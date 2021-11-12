import React from "react";

const ReviewsCard = ({item}) => {
    const {name, review, image} = item;
    const clientImage = {
        height: "300px",
    }
  return (
    <div className="col-md-4">
      <div className="card shadow-sm text-center my-3 mx-2">
        <img style={clientImage} src={image} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <p className="card-text">{review.slice(0, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
