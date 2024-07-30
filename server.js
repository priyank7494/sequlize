var express = require('express');
var cors = require('cors');

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routers
const productRouter = require('./routes/productRoutes');    
const reviewRouter = require('./routes/reviewRoutes');

app.use('/api/products' , productRouter);
app.use('/api/review' , reviewRouter);




app.get('/', (req, res) => {
    res.json({
        message: "hello from the server!!!"
    })
})


var PORT = 8080;

app.listen(PORT, () => console.log(`Server Connected On PORT : ${PORT}`));