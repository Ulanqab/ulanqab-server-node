import db from '../models/index.js';

const userObj = db.users;
const userDetailObj = db.userDetail;
const op = db.Sequelize.Op

function valide(request, result) {
    if (!request.body.nickname) {
        result.status(400).send({
            message: 'Please input nickname.'
        })
        return false
    }
    if (!request.body.password) {
        result.status(400).send({
            message: 'Please input password.'
        })
        return false
    }
    return true
}

function register(request, result) {
    
    if (!valide(request, result)) return

    const user = {
        mobile: request.body.mobile,
        nickname: request.body.nickname,
        password: request.body.password,
    }

    userObj.create(user).then(data => {
        userDetailObj.create(data.dataValues).then(detail => {
            result.send({
                code: 200,
                data
            })
        }).catch(error => {
            console.log('create user detail error:::', error.message)
            result.status(500).send({
                message: error.message || 'Some error occured while register user.'
            })
        })
    }).catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occured while register user.'
        })
    })
}

function login(request, result) {

    if (!valide(request, result)) return

    userObj.findAll({
        where: { nickname: request.body.nickname}
    }).then(data => {
        result.send({
            code: 200,
            data: data[0]
        })
    }).catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occured while login.'
        })
    })
}

function logout(request, result) {

}

function update(request, result) {

    if (!valide(request, result)) return

    const ID = request.body.id;
    userObj.update(request.body, {
        where: {id: ID}
    }).then(num => {
        if (num[0] === 1) {
            result.send({
                message: 'Update User Detail success.'
            })
        } else {
            result.send({
                message: `Cannot update User ${request.body.id}.`
            })
        }
    }).catch(error => {
        result.status(500).send({
            message: error.message || `Some error occurred while update User ${request.body.id}.`
        })
    })
    userDetailObj.update(request.body, {
        where: {id: ID}
    }).then(num => {
        if (num[0] === 1) {
            result.send({
                message: 'Update User Detail success.'
            })
        } else {
            result.send({
                message: `Cannot update User ${request.body.id}.`
            })
        }
    }).catch(error => {
        result.status(500).send({
            message: error.message || `Some error occurred while update User ${request.body.id}.`
        })
    })
}

function deleteUser(request, result) {
    
    // if (!valide(request, result)) return

    const paramID = request.params.id
    if (!paramID) {
        result.status(400).send({
            message: 'Delete user need user id'
        })
        return
    }

    userObj.findAll({
        where: {id: paramID}
    }).then(data => {
        data.isDelete = true
        userObj.update(data, {
            where: {id: paramID}
        }).then(num => {
            if (num[0] === 1) {
                result.send({
                    message: `Delete user ${paramID} success.`
                })
            } else {
                result.status(400).send({
                    message: `Some error occurred while delete user ${paramID}.`
                })
            }
        })
    }).catch(error => {
        result.status(500).send({
            message: error.message || `Some error occurred while delete User ${request.body.id}.`
        })
    })

    userDetailObj.findAll({
        where: {id: paramID}
    }).then(data => {
        data.isDelete = true
        userDetailObj.update(data, {
            where: {id: paramID}
        }).then(num => {
            if (num[0] === 1) {
                result.send({
                    message: `Delete user ${paramID} success.`
                })
            } else {
                result.status(400).send({
                    message: `Some error occurred while delete user ${paramID}.`
                })
            }
        })
    }).catch(error => {
        result.status(500).send({
            message: error.message || `Some error occurred while delete User ${request.body.id}.`
        })
    })

}


export default {
    register,
    login,
    logout,
    update,
    deleteUser,
}