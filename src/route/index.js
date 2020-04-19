import express from 'express';
import Post from '../controller/Post.js';

const router = express.Router();

router.post('/api/posts/create', Post.create);

router.post('/api/posts/update/:id', Post.updatePostById);

router.post('/api/posts/delete/:id', Post.deletePostById);

router.get('/api/posts/:id', Post.getPostsById);

router.get('/api/posts/all', Post.getAllPosts);

export default router;