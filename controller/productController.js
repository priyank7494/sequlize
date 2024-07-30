var db = require('../model/model');

//create main model 
var Product = db.products;

//main work 

// create product 

const   addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    const product = await Product.create(info);
    product.save();
    res.status(200).send(product);
}


//get all products

const getAllProduct = async (req, res) => {
    let products = await Product.findAll({
        attributes: [
            'title',
            'price'
        ]
    });
    res.status(200).send(products);
}


//get single product

const getSingeProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({
        where: { id: id },
        attributes: [
            'title',
            'price'
        ]
    });
    res.status(200).send(product);
}



//update product

const updateProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
}




//delete  product

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send('product is deleted!!');  
}



//published product

const getPublishedProduct = async (req, res) => {
    ;
    let  published = await Product.findAll({ where: {published : true} });
    res.status(200).send(published);  
}


module.exports = {addProduct , getAllProduct , getSingeProduct , updateProduct ,deleteProduct ,getPublishedProduct};
