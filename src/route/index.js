import express from 'express';
import Post from '../controller/Post.js';
import User from '../controller/User.js';

const router = express.Router();

// posts
router.post('/api/posts/create', Post.create);

router.post('/api/posts/update/:id', Post.updatePostById);

router.post('/api/posts/delete/:id', Post.deletePostById);

router.get('/api/posts/all', Post.getAllPosts);

router.get('/api/posts/:id', Post.getPostsById);

// users
router.post('/api/users/register', User.register)

router.post('/api/users/login', User.login)

router.post('/api/users/logout', User.logout)


// RouterPosts(router)

// RouterUser(router)

// function RouterPosts(router) {
//     router.post('/api/posts/create', Post.create);

//     router.post('/api/posts/update/:id', Post.updatePostById);

//     router.post('/api/posts/delete/:id', Post.deletePostById);

//     router.get('/api/posts/all', Post.getAllPosts);

//     router.get('/api/posts/:id', Post.getPostsById);
// }

// function RouterUser(router) {

//     router.post('/api/users/register', User.register)

//     router.post('/api/users/login', User.login)

//     router.post('/api/users/logout', User.logout)
// }

// RouterPosts(router)

// RouterUser(router)

export default router