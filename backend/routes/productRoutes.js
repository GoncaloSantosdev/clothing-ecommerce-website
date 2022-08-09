import express from "express";
const router = express.Router();
import Product from '../models/productModel.js';

// Fetch all products 
router.get('/', async (req, res, next) => {
    const products = await Product.find({});
    res.json(products);
});

// Fetch Single Product
router.get('/:id', async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }

});

export default router;