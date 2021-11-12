import React from "react";
import { Link } from "react-router-dom";

const RecentCarsCard = ({ product }) => {
  const { make, model, chassis, mileage, color, fuelType, grade, year, image } = product;
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img
          style={{ height: '300px' }}
          src={image}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Toyota C-HR</h5>
          <div className="d-flex justify-content-center mb-2">
            <span className="badge bg-info text-white me-1">{year}</span>
            <span className="badge bg-info text-white me-1">{mileage} km</span>
            <span className="badge bg-info text-white me-1">{fuelType}</span>
            <span className="badge bg-info text-white me-1">{grade}</span>
            <span className="badge bg-info text-white">{color}</span>
          </div>
          <div className="d-flex justify-content-center">
            <Link to={`/product-details/${chassis}`} className="btn btn-outline-info btn-sm me-2">
              View Details
            </Link>
            <Link to={`/purchase/${chassis}`} className="btn btn-outline-info btn-sm">
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCarsCard;
