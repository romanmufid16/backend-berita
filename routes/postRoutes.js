import express from "express";
import { addPost, deletePost, getPostById, getPosts, updatePost } from "../controllers/postController.js";

const routes = express.Router();

routes.get('/', getPosts);
routes.get('/:id',getPostById);
routes.post('/', addPost);
routes.patch('/:id', updatePost);
routes.delete('/:id', deletePost);

export default routes;