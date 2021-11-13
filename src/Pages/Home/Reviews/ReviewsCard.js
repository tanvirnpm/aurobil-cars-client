import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ReviewsCard = ({ item }) => {
  const { name, review, image, rating } = item;
  const clientImage = {
    height: "300px",
  }
  return (
    <div className="col-md-4">
      <div className="card shadow-sm text-center my-3 mx-2">
        <img style={clientImage} src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

         
          <div className="d-flex justify-content-center">
          <Stack spacing={1}>
            <Rating name="read-only" value={rating} readOnly />
          </Stack>
          </div>
          <p className="card-text">{review.slice(0, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
