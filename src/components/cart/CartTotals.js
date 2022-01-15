import React from 'react'
import {Link} from 'react-router-dom';
import './CartTotals.css'
import PayPalButton from './PayPalButton'

export default function CartTotals({value, history}) {
    const{cartSubTotal, cartTax, cartTotal, clearCart,} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row movemat">
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                    text-capitalize text-left '>
                         <Link to="/">
                            <button className='btn btn-outline-danger 
                            text-uppercase mb-3 px-5'
                             type="button"
                             onClick={() => clearCart()}
                             >
                                    clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className='text-title'>
                                subtotal :
                            </span>
                            <strong>₦ {cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className='text-title'>
                                tax :
                            </span>
                            <strong>₦ {cartTax}</strong>
                        </h5>

                        <h5>
                            <span className='text-title'>
                                total :
                            </span>
                            <strong>₦ {cartTotal}</strong>
                        </h5>
                        <p>
                            <PayPalButton total={cartTotal} clearCart={clearCart} 
                        history={history} />
                        </p>
                        

                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
