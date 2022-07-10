const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('matijaslist', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
