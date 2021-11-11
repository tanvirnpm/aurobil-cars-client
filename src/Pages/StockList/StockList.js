import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Header/Navbar';
import StockListCard from './StockListCard';

const StockList = () => {
    return (
        <div>
            <Navbar/>
            <div className="container my-5">
                <h1 className="text-center mb-4">Update Stock List</h1>
                <div className="row g-3">
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                    <StockListCard />
                </div>
            </div>
            <Footer />
            
        </div>
    );
};

export default StockList;