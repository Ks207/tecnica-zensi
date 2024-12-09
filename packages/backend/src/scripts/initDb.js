require('dotenv').config();
const { sequelize, User } = require('../models');

async function initializeDatabase() {
  try {
    // Force sync 
    await sequelize.sync({ force: true });
    console.log('Database tables created successfully');

    // Create first user
    await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123456'
    });
    console.log('First user created successfully');

    console.log('Database initialization completed');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initializeDatabase();
