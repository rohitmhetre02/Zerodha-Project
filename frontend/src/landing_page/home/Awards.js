import React from 'react';


function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='no' />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all
                        volume i India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Feture and options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stock & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                   <img style={{width:"90%"}} src='media\images\pressLogos.png' alt='Press Img'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;