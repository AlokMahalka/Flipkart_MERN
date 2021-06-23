import Products from "../model/productSchema.js";

export const getProducts = async (req,res) => {
    try{   
        const products = await Products.find({});
        res.json(products);
    }catch(err){
        console.log("error:",err.message);
    }
}

export const getProductById = async (req,res) =>{
    try{
        const product = await Products.findOne({'id': req.params.id});
        res.json(product);
    }catch(err){
        console.log("error:", err.message);
    }
}