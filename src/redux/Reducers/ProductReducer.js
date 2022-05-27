import { GET_PRODUCTS } from "../Constans/ProductConstans";


const initialState = {
    products: {}
}

export const getProductReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            
        return{
            ...state,
            products: action.payload
        }
    
        default:
            return state;
    }
}