import React from 'react';
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Reviews from '../Reviews/Reviews'
import NewsLetter from '../NewsLetter/NewsLetter'
import StockList from '../../Shared/StockList/StockList'
const Home = () => {
    return (
        <div>
            <Header />
            <StockList />
            <WhyChooseUs />
            <Reviews />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;