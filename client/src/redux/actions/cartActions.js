import axios from "axios"
import * as action from '../constants/cartConstants';

const url = 'http://localhost:8000'

export const addToCart = (id) => async (dispatch) =>{
    try{
       const { data } =  await axios.get(`${url}/product/${id}`);
        dispatch({type: action.ADD_TO_CART, payload: data});
    }catch(err){
        console.log("error while calling cart api")
    }
}

export const removeFromCart = (id) => (dispatch) => {
    try{
        dispatch({type: action.REMOVE_FROM_CART, payload: id})
    }catch(err){
        console.log("Could not remove item")
    }
}