import React from 'react';
import { useNavigate } from "react-router-dom";

function Universe() {
    const navigate = useNavigate(); 

  const handleSignupClick = () => {
    navigate("/signup"); 
  };
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: "40%",height:"40%" }} src="media\images\zerodhafundhouse.png" />
                    <div className='mt-3'>
                        <p className='text-small text-muted'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: "50%",height:"40%" }} src="media\images\sensibullLogo.svg" />
                    <div className='mt-3'>
                        <p className='text-small text-muted'>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: "40%",height:"40%" }} src="media\images\tijori.svg" />
                    <div className='mt-3'>
                        <p className='text-small text-muted'>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </div>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: "50%",height:"40%" }} src="media\images\streak-logo.png" />
                    <div className='mt-3'>
                        <p className='text-small text-muted'>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </div>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: "50%",height:"40%" }} src="media\images\smallcaseLogo.png" />
                    <div className='mt-3'>
                        <p className='text-small text-muted'>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </div>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: "40%",height:"40%" }} src="media\images\dittoLogo.png" />
                    <div className='mt-3'>
                        <p className='text-small text-muted'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.</p>
                    </div>
                </div>
                <button onClick={handleSignupClick}   className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;