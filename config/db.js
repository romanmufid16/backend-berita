import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL database');
    } catch (error) {
        console.error('Error connecting to MySQL database');
    }
}

testConnection();

export default sequelize;