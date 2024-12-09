const { Sequelize } = require('sequelize');
const pg = require('pg');
const UserModel = require('./user');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const User = UserModel(sequelize);

module.exports = {
  sequelize,
  User
};