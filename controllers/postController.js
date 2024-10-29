import Posts from "../models/posts.js";
import Categories from "../models/categories.js";
import '../models/associate.js';

const getPosts = async (req, res) => {
    try {
        const response = await Posts.findAll({
            include: [{
                model: Categories,
                attributes: ['name'],
            }]
        });

        const modifiedResponse = response.map(post => ({
            title: post.title,
            category: post.category.name,
            body: post.body,
            image_url: post.image_url,
            news_date: post.news_date,
            created_at: post.createdAt,
            updated_at: post.updatedAt
        }));
        res.status(200).json(modifiedResponse);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getPostById = async (req, res) => {
    try {
        const response = await Posts.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const addPost = async (req, res) => {
    try {
        const response = await Posts.create(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const updatePost = async (req, res) => {
    try {
        await Posts.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const deletePost = async (req, res) => {
    try {
        await Posts.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(204).json(null);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export { getPosts, getPostById, updatePost, addPost, deletePost };