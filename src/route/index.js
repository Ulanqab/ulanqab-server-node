import express from 'express';
import Post from '../controller/Post.js';

const router = express.Router();

function RouterPosts(router) {
    router.post('/api/posts/create', Post.create);

    router.post('/api/posts/update/:id', Post.updatePostById);

    router.post('/api/posts/delete/:id', Post.deletePostById);

    router.get('/api/posts/all', Post.getAllPosts);

    router.get('/api/posts/:id', Post.getPostsById);
}

RouterPosts(router)

export default router