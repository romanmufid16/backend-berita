import Posts from "../models/posts.js";

const getPosts = async (req, res) => {
    try {
        const response = await Posts.findAll();
        res.status(200).json(response);
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