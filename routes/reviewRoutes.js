const reviewCon = require('../controller/reviewController');
const  router = require('express').Router();

router.post('/add-review',reviewCon.addReview);
router.get('/get-all-review',reviewCon.getAllReview);



module.exports = router;