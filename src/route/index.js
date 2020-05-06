import express from 'express';
import Post from '../controller/Post.js';
import User from '../controller/User.js';
import Category from '../controller/Category.js';

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

router.post('/api/users/update', User.update)

router.post('/api/users/delete/:id', User.deleteUser)

// category
router.post('/api/category/create', Category.create)

router.post('/api/category/update/:id', Category.updateById)

router.post('/api/category/delete/:id', Category.deleteById)

router.post('/api/category/list', Category.getList)


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