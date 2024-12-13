const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
    try {
        res.json(await Product.find());
    } catch(error) {
        res.json({message: error});
    }
});

// GET a specific product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;  // Get the product ID from the URL parameter
    try {
        const product = await Product.findById(id);  // Find product by its ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);  // Return the product data as a response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
});

module.exports = router;