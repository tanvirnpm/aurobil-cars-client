import React from "react";
import RecentCarsCard from "./RecentCarsCard";

const RecentCars = () => {
  return (
    <section className="container py-4">
      <h1 className="mb-4">Recent Car's</h1>
      <div className="row g-3">
        <RecentCarsCard />
        <RecentCarsCard />
        <RecentCarsCard />
        <RecentCarsCard />
        <RecentCarsCard />
        <RecentCarsCard />
        <RecentCarsCard />
        <RecentCarsCard />
      </div>
    </section>
  );
};

export default RecentCars;
