import db from '../models/index.js';

const postObj = db.posts;
const op = db.Sequelize.Op;

function create(request, result) {
    if (!request.body.title) {
        result.status(400).send({
            message: 'Content can not be empty!'
        })
        return
    }
    // 创建一个帖子对象
    const post = {
        title: request.body.title,
        description: request.body.description,
        published: request.body.published ? request.body.published : false,
        publisher: request.body.publisher ? request.body.publisher : false
    };

    postObj.create(post).then(data => {
        result.send(data)
    }).catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occurred while saving post.',
        })
    });
};

function updatePostById(request, result) {
    const paramID = request.params.id;
    postObj.update(request.body, {
        where: { id: paramID }
    })
    .then(num => {
        if (num[0] === 1) {
            result.send({
                message: 'Post object successfully updated.'
            })
        } else {
            result.send({
                message: `Cannot update Post object width: ${paramID}.`
            })
        }
    })
    .catch(error => {
        result.status(500).send({
            message: 'Some error occurred while update post'
        })
    })
}

function deletePostById(request, result) {
    const paramID = request.params.id;
    postObj.destroy({
        where: { id: paramID },
    })
    .then(num => {
        if (num === 1) {
            result.status(204).send({
                message: 'Post object successfully deleted.'
            })
        } else {
            result.send({
                message: `Cannot delete Post object width: ${paramID}.`
            })
        }
    })
    .catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occurred while delete post'
        })
    })
}

function getAllPosts(request, result) {
    postObj.findAll()
        .then(data => {
            result.send(data)
        }).catch(error => {
            result.status(500).send({
                message: error.message || 'Some error occurred while retrieving data.'
            });
        });
};

function getPostsById(request, result) {
    const paramID = request.params.id;
    postObj.findAll({
        where: { id: paramID },
    })
    .then(data => {
        result.send(data)
    })
    .catch(error => {
        result.status(500).send({
            message: error.message || `Some error occurred while retrieving data with: ${paramID}`,
        });
    })
}

export default {
    create,
    updatePostById,
    deletePostById,
    getAllPosts,
    getPostsById,
};