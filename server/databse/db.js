import mongoose from 'mongoose';

const Connection = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@flipkart.gurq7.mongodb.net/RESEARCH?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
        console.log("Database Connected Successfully")
    }catch(err){
        console.log('error',err.message)
    }
}

export default Connection;