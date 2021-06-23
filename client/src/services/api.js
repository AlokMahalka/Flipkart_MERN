import axios from 'axios';

const url = "http://localhost:8000";

export const authenticateSignup = async (user) => {
    try{
        return await axios.post(`${url}/signup`,user)
    }catch(err){
        console.log('Error',err.message);
    }
}

export const authenticateLogin = async (user) =>{
    try{
        return await axios.post(`${url}/login`,user);
    }catch(err){
        console.log('Error',err.message);
    }
}

export const payUsingPaytm = async (data) => {
    try{
       let response = await axios.post(`${url}/payment`, data);
       return response.data;
    }catch(err){
        console.log("error while calling paytm api", err.message)
    }
}