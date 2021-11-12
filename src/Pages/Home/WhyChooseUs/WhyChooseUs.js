import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      title: "Wide range of brands",
      description:
        "With a wide range of innovative vehicle model, this car brand has always been known for its reliability and luxury status. This automobile company has always...",
      image: "fa-solid fa-certificate",
    },
    {
      title: "Trusted by our clients",
      description:
        "Take them to the car and give complete details of the car. Also ask them to have a test drive and have thorough experience of handling the car, the comfort, ride quality etc.",
      image: "fa-solid fa-users",
    },
    {
      title: "Fast & easy financing",
      description:
        "At Link Motors, we believe everyone deserves vehicle financing. We work with all types of credit from good to average to bad. With the Link...",
      image: "fa-solid fa-comments-dollar",
    },
  ];
  return (
    <section className="bg-light">
      <div className="container py-5">
        <h1 className="text-center mb-4">Why choose us?</h1>
        <div className="row g-3">
          {whyChooseUs.map((whyChooseUs, index) => (
            <WhyChooseUsCard key={index} whyChooseUs={whyChooseUs} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
