import React from 'react';

function RightSection({ imageURL,
    productName,
    productDesription,
    lernMore,
}) {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div cl>
                        <a href={lernMore} >LernMore</a>
                    </div>
                </div>
                <div className='col-6 '>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;