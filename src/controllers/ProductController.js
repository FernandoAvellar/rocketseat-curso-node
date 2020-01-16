const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404);
            return res.send();
        }
        return res.json(product);
    },
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async update(req, res) {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            res.status(404);
            return res.send();
        }
        return res.json(updatedProduct);
    },
    async destroy(req, res) {
        /*  await Product.findByIdAndDelete(req.params.id);
         return res.send(); */
        const isProductExists = await Product.findById(req.params.id);
        if (isProductExists) {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id);
            return res.send();
        }
        res.status(404);
        return res.send();
    }
};