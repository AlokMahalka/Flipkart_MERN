import { products } from "./constants/product.js";
import Products from "./model/productSchema.js";

const DefaultData = async () => {
    try{
        await Products.deleteMany();
        await Products.insertMany(products);
        console.log("Data Imported")
    }catch(err){
        console.log('error',err.message);
    }
}

export default DefaultData;