import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Categories = sequelize.define('categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    freezeTableName: true
});



export default Categories;