import Categories from "../models/categories.js";

const getCategories = async (req, res) => {
    try {
        const response = await Categories.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getCategoryById = async (req, res) => {
    try {
        const response = await Categories.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const addCategory = async (req, res) => {
    try {
        const response = await Categories.create(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const updateCategory = async (req, res) => {
    try {
        await Categories.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const deleteCategory = async (req, res) => {
    try {
        await Categories.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(204).json(null);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export { getCategories, getCategoryById, addCategory, updateCategory, deleteCategory}