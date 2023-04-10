
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('base1', 'alginjude', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
 
sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(error => console.error('Error connecting to database:', error));

module.exports = sequelize;