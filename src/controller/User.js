import db from '../models/index.js';

const userObj = db.users;
const userDetailObj = db.userDetail;
const op = db.Sequelize.Op

function register(request, result) {
    if (!request.body.nickname) {
        result.status(400).send({
            message: 'Please input nickname.'
        })
        return
    }
    if (!request.body.password) {
        result.status(400).send({
            message: 'Please input password.'
        })
        return
    }

    const user = {
        mobile: request.body.mobile,
        nickname: request.body.nickname,
        password: request.body.password,
    }

    userObj.create(user).then(data => {
        userDetailObj.create(data.dataValues).then(detail => {
            result.send(data)
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
    if (!request.body.nickname) {
        result.status(400).send({
            message: 'Please input nickname.'
        })
        result
    }
    if (!request.body.password) {
        result.status(400).send({
            message: 'Please input password.'
        })
        return
    }
    userObj.findAll({
        where: { nickname: request.body.nickname}
    }).then(data => {
        result.send(data)
    }).catch(error => {
        result.status(500).send({
            message: error.message || 'Some error occured while login.'
        })
    })
}

function logout(request, result) {

}

export default {
    register,
    login,
    logout,
}