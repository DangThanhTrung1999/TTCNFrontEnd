import React from 'react';
import './ProductDetail.css'
function ProductDetail(props) {
    return (
        <div className='container'>
            <div className="row">
                <div class="col-12 col-sm-6" style={{backgroundColor:'red'}}>
                    <img/>
                </div>
                <div class="col-12 col-sm-6" style={{backgroundColor:'yellow'}}>
                    right   
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;