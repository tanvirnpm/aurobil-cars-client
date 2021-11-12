import React, { useEffect, useState } from "react";
import RecentCarsCard from "./RecentCarsCard";

const RecentCars = () => {
  const [allProdutcs, setAllProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/get-all-products')
      .then(res => res.json())
      .then(data => setAllProducts(data))
  }, [])
  return (
    <section className="container py-4">
      <h1 className="mb-4 text-center text-md-start">Recent Car's</h1>
      <div className="row g-3">
        {
          allProdutcs.slice(0,6).map(product => <RecentCarsCard product={product} />)
        }
      </div>
    </section>
  );
};

export default RecentCars;
