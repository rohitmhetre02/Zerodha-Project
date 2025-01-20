import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function ProductPage() {
    return (
        <>
            < Hero />
            <LeftSection
                imageURL="media\images\kite.png"
                productName="Kite"
                productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy 
                the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googleplay=""
                appStore="" />

            <RightSection
                imageURL="media\images\console.png"
                productName="Console"
                productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                lernMore="" />

            <LeftSection
                imageURL="media\images\coin.png"
                productName="Coin"
                productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googleplay=""
                appStore="" />

            <RightSection
                imageURL="media\images\kiteconnect.png"
                productName="Kite Connect API"
                productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                lernMore="" />

            <LeftSection
                imageURL="media\images\varsity-products.png"
                productName="Varsity mobile"
                productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googleplay=""
                appStore="" />

                <p className='text-center fs-4 pt-5 pb-5 mt-5 mb-5'>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech </a>blog.</p>
            <Universe />
        </>
    );
}

export default ProductPage;