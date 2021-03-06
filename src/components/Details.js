import React, { Component } from 'react';
import{ProductConsumer} from '../Context';
import {ButtonContainer} from './Button'
import{Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                const {id,company,img,info,price,title,inCart} = 
                value.detailProduct;
                return(
                    <div className="container py-5">
                        {/*start of title */}
                            <div className="row">
                                <div className="col-10 mx-auto 
                                text-center text-slanted text-blue my-5 text-capitalize">
                                    <h1>
                                        {title}
                                    </h1>
                                </div>
                            </div>

                        {/*end og title */}
                        {/*product info image */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className='img-fluid' alt='product'/>
                            </div>
                            {/*product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h1>
                                    {title}
                                </h1>
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                    Product of : <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4>
                                        <strong>
                                            Price : <span>₦</span>
                                            {price}
                                        </strong>
                                    </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                product information: 
                            </p>
                            <p className="text-muted lead">
                                {info}

                            </p>
                            {/* */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                            Back to products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer  
                                    disabled={inCart?true:false} onClick={()=>{
                                        value.addToCart(id);
                                        
                                    }

                                    }>
                                        {inCart ? "inCart" : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
               }}
           </ProductConsumer>
        )
    }
}
