import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className="p-5 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>

            <div className=" row m-5 p-5">
                <div className=" col-6 p-5 ">
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-3' placeholder='Eg: how do i activate F&O,why is my order getting rejected...'/>
                    <br></br>
                    <a style={{fontSize:"1.3rem"}} href='#'>Track account opening</a>
                    <a style={{marginLeft:"20px",fontSize:"1.2rem"}} href='#'>Track segment activation</a>
                    <a style={{marginLeft:"20px",fontSize:"1.2rem"}} href='#'>Intraday margins</a>
                    <br></br>
                    <a style={{fontSize:"1.2rem",lineHeight:"50px"}} href='#'>Kite user manual</a>
                </div>
                <div className=" col-6 p-5 ">
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li style={{lineHeight:"50px"}}><a href='#'> Rights Entitlements listing in January 2025</a></li>
                        <li><a href='#'> Surveillance measure on scrips - January 2025</a></li>
                    </ol>
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;