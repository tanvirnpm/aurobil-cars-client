import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Header/Navbar';
import StockListCard from './StockListCard';

const StockList = () => {
    const [allProdutcs, setAllProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/get-all-products')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
    // console.log(allProdutcs)
    return (
        <div>
            <Navbar/>
            <div className="container my-5">
                <h1 className="text-center mb-4">Update Stock List</h1>
                <div className="row g-3">
                    {
                        allProdutcs.map((product, index)=> <StockListCard key={index} product={product}/>)
                    }
                </div>
            </div>
            <Footer />
            
        </div>
    );
};

export default StockList;