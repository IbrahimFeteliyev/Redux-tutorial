import { ADD_TO_CART } from "../Constans/CartConstans"

export const addToCartAction =  (product) => async(dispach, getState) =>{

    var data = localStorage.setItem("cart",JSON.stringify(product));

    dispach({
        type: ADD_TO_CART,
        payload: data
    })
}