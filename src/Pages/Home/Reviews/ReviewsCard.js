import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './ReviewsCard.css'

const ReviewsCard = ({ item }) => {
  const { name, review, image, rating } = item;
  const clientImage = {
    height: "60px",
    width: "60px",
    borderRadius: '50%'
  }
  return (
    <div className="col-md-4">
      <div className="border rounded shadow-sm">
        <div class="block-text rel zmin">
          <div class="mark d-flex"><span className="me-2">My rating:</span>
            <Stack spacing={1}>
              <Rating name="read-only" value={rating} readOnly />
            </Stack>
          </div>
          <p>{review.slice(0, 150)}</p>
          <ins class="ab zmin sprite sprite-i-triangle block"></ins>
        </div>
        <div class="person-text rel">
          <img style={clientImage} src={image} alt="" />
          <p>{name}</p>
        </div>
      </div>
    </div>

  );
};

export default ReviewsCard;
