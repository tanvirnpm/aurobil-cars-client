import React from "react";

const WhyChooseUsCard = ({whyChooseUs}) => {
    const {title, description, image} = whyChooseUs;
    const iconSize = {
        fontSize: "3rem"
    }
  return (
    <div className="col-md-4">
      <div className="card shadow-sm text-center my-3 mx-2">
        <i style={iconSize} class={`card-img-top mt-4 text-info ${image}`}></i>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.slice(0,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
