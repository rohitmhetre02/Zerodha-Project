import React from 'react';


function Pricing() {
    return (
        <div className='container mb-5 '>
            <div className='row p-5'>
                <div className='col-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking 
                        and price transparency in India. Flat fees 
                        and no hidden charges.</p>
                        <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7 mt-4'>
                    <div className='row text-center'>
                        <div className='col '>
                           <img style={{height:"30%"}} src='media\images\pricing-eq.svg' alt='pricing' />
                           <p>Free account
                           opening</p>
                        </div>
                        <div className='col '>
                        <img style={{height:"30%"}} src='media\images\pricing-eq.svg' alt='pricing'/>
                        <p>Free equity delivery
                        and direct mutual funds</p>
                        </div>
                        <div className='col '>
                        <img style={{height:"30%"}} src='media\images\other-trades.svg' alt='other'/>
                        <p>Intraday and
                        F&O</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;