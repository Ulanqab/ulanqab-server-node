import db from '../models/index.js';

const category = db.category;

function create(request, result) {
    if (!request.body) {
        result.status(400).send({
            message: 'Please input category info'
        })
        return
    }
    const params = {
        categoryValue: request.body.categoryValue,
        categoryKey: request.body.categoryKey
    }
    category.create(params).then(data => {
        result.send(data)
    }).catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occurred while create category'
        })
    })
}

function updateById(request, result) {
    const paramId = request.params.id
    category.update(request.body, {
        where: {id: paramId}
    }).then(num => {
        if (num[0] === 1) {
            result.send({
                message: 'Post object successfully updated.'
            })
        } else {
            result.send({
                message: `Cannot update Post object width: ${paramID}.`
            })
        }
    }).catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occurred while update category',
        })
    })
}

function deleteById(request, result) {
    const paramId = request.params.id
    category.destroy({
        where: {id: paramId}
    }).then(num => {
        if (num[0] === 1) {
            result.status(204).send({
                message: 'Delete category by id success'
            })
        } else {
            result.send({
                message: `Can not delete category id:${paramId}`,
            })
        }
    }).catch(error => {
        result.status(500).send({
            message: error.message || `Some error occurre while delete category id:${paramId}`,
        })
    })
}

function getList(request, result) {
    category.findAll().then(data => {
        result.send(data)
    }).catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occurre while get category list',
        })
    });
}

export default {
    create,
    updateById,
    deleteById,
    getList,
}