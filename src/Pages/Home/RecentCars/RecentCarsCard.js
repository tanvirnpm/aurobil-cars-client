import React from "react";

const RecentCarsCard = () => {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img
          src="https://global.toyota/pages/models/images/20191018/kv/c-hr_ogp_01.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Toyota C-HR</h5>
          <div className="d-flex justify-content-center mb-2">
            <span className="badge bg-info text-white me-1">2016</span>
            <span className="badge bg-info text-white me-1">10,548 km</span>
            <span className="badge bg-info text-white me-1">Hybrid</span>
            <span className="badge bg-info text-white me-1">4</span>
            <span className="badge bg-info text-white">Blue</span>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-info btn-sm me-2">
              View Details
            </button>
            <button className="btn btn-outline-info btn-sm">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCarsCard;
