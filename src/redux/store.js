import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { CartReducer } from "./Reducers/CartReducer";
import { getProductsReducer } from "./Reducers/ProductsReducer";



const reducer = combineReducers({
    products : getProductsReducer,
    carts: CartReducer
})


const initialState ={

}

const middleware = [thunk]

const store = createStore (
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;
