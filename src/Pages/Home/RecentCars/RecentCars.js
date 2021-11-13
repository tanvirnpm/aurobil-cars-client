import React, { useEffect, useState } from "react";
import RecentCarsCard from "./RecentCarsCard";
import Spinner from '../../../FeedBack/Spinner';

const RecentCars = () => {
  const [allProdutcs, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://intense-dawn-68409.herokuapp.com/get-all-products')
      .then(res => res.json())
      .then(data => setAllProducts(data))
      .finally(()=> setIsLoading(false))
  }, [])
  return (
    <section className="container py-4">
      <h1 className="mb-4 text-center text-md-start">Recent Car's</h1>
      <div className="row g-3">
        {
          isLoading && <Spinner />
        }
        {
          allProdutcs.slice(0,6).map((product, index) => <RecentCarsCard key={index} product={product} />)
        }
      </div>
    </section>
  );
};

export default RecentCars;
