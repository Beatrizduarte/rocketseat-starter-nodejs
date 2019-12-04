const mongoose = require('mongoose')

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products)

        setTimeout(() =>{
            reject('Erro X')
        }, 300)
    },

    async store(req, res){
        // criação 

        const product = await Product.create(req.body);

        return res.json(product)
    }

};