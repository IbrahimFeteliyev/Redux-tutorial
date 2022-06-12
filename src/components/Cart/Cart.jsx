
import React from 'react'
import { useSelector } from 'react-redux'
import '../Cart/cart.scss'
import ClearIcon from '@mui/icons-material/Clear';



function Cart() {
    const cartItem = useSelector((state) => state.carts.cart)
    return (
        <section className='cart-section'>
            <div className="cart-container">
                <div className="row">
                    <div className="col-lg-8">
                        <form className="cart-form" action="#">
                            <table>
                                <thead>
                                    <tr>
                                        <div className="row">
                                            <div className="col-lg-6"><th >Product</th></div>
                                            <div className="col-lg-2"><th >Price</th></div>
                                            <div className="col-lg-2"><th >Quantity</th></div>
                                            <div className="col-lg-2"><th >Subtotal</th></div>
                                        </div>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItem.length > 0 ?
                                            cartItem.map(product => (
                                                <tr>
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-3">
                                                            <div className="d-flex align-items-center">
                                                                <td className='delete'><ClearIcon /></td>
                                                                <td><img width={150} height={100} src={product.img} alt="" /></td>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <td className='product-name'>{product.name}</td>
                                                        </div>
                                                        <div className="col-lg-2"><td>${product.price}</td></div>
                                                        <div className="col-lg-2"><td className='quantity'>- 1 +</td></div>
                                                        <div className="col-lg-2"><td>${product.price}</td></div>
                                                    </div>
                                                </tr>
                                            ))

                                            : (
                                                "Mehsul yoxdu"
                                            )
                                    }

                                </tbody>
                            </table>
                        </form>

                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="cart-title">Cart totals</div>
                                <ul className='list-unstyled'>
                                    <li>
                                        <div className="line">
                                            <div className="left">Subtotal</div>
                                            <div className="right">$1,842.00</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="line">
                                            <div className="left">Shipping</div>
                                            <div className="right">
                                                <ul className='list-unstyled'>
                                                    <li><span>Enter your address to view shipping options.</span></li>
                                                    <li><span>Calculate shipping</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="line">
                                            <div className="left">Total</div>
                                            <div className="right">$1,842.00</div>
                                        </div>
                                    </li>
                                </ul>
                                <div className='button'>Proceed to checkout</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Cart