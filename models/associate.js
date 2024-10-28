import Categories from "./categories.js";
import Posts from "./posts.js";

Categories.hasMany(Posts, {foreignKey: 'category_id'});
Posts.belongsTo(Categories, {foreignKey: 'category_id'});