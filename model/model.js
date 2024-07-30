var { Sequelize, DataTypes } = require('sequelize')

var dbConfig = require('../config/dbConfig');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

var sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
    },
);

sequelize.authenticate()
    .then(() => {
        console.log("mysql connected !!!!!!!!!");
    })
    .catch((err) => {
        console.log("Data Base error" + err);
    })

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel')(sequelize, DataTypes)
db.reviews = require('./reviewsModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => console.log("yes re-sync done !!!"))


// 1 to many relation

db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review  '
})



module.exports = db;