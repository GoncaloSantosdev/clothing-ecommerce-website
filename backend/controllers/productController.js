import Product from '../models/productModel.js';

// Fetch all products 
const getProducts = async(req, res) => {
    const products = await Product.find({});
    res.json(products);
}

// Fetch Single Product
const getProductById = async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}

export {
    getProducts,
    getProductById
}