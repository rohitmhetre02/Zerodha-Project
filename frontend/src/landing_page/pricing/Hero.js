import React from 'react';

function Hero() {
    return (
        <div className='container mb-5 bt-5'>
            <div className="text-center mt-5 p-3">
                <h1 className='fs-1 mb-3'>Charges</h1>
                <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive
                    trading platforms</h3>
            </div>
            <div className='row text-center pt-5 mt-5'>
                <div className='col-4'>
                    <img style={{ height: "70%", width: "60%" }} src='media\images\pricing-eq.svg' />
                    <h3>Free equity delivery</h3>
                    <p>Allequity delivery investments (NSE, BSE),
                        are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img style={{ height: "70%", width: "60%" }} src='media\images\other-trades.svg' />
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and
                        commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img style={{ height: "70%", width: "60%" }} src='media\images\pricing-eq.svg' />
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;