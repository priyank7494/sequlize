var db = require('../model/model');
const { get } = require('../routes/productRoutes');

var Review = db.reviews;

// Add a review

const addReview = async(req,res)=>{
    let data = {
        rating: req.body.rating,
        description : req.body.description,
    }

    var review = await Review.create(data);
    res.status(200).send(review);    
}

//Get All review 

const getAllReview = async(req,res)=>{
    

    var reviews = await Review.findAll({});
    res.status(200).send(reviews);    
}


module.exports = {addReview , getAllReview}