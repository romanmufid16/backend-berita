import express from "express";
import {
    getCategories,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categoryController.js"

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/', addCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;