import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getProductsReducer } from "./Reducers/ProductsReducer";



const reducer = combineReducers({
    products : getProductsReducer
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
