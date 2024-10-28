import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Posts = sequelize.define('posts', {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    news_date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    timestamps: true,
    freezeTableName: true,
});


export default Posts;