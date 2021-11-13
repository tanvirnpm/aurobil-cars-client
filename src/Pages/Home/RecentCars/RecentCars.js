import React, { useEffect, useState } from "react";
import RecentCarsCard from "./RecentCarsCard";

const RecentCars = () => {
  const [allProdutcs, setAllProducts] = useState([])
  useEffect(() => {
    fetch('https://intense-dawn-68409.herokuapp.com/get-all-products')
      .then(res => res.json())
      .then(data => setAllProducts(data))
  }, [])
  return (
    <section className="container py-4">
      <h1 className="mb-4 text-center text-md-start">Recent Car's</h1>
      <div className="row g-3">
        {
          allProdutcs.slice(0,6).map((product, index) => <RecentCarsCard key={index} product={product} />)
        }
      </div>
    </section>
  );
};

export default RecentCars;
