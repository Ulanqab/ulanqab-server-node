const initUsers = (database, Sequelize) => {
    return database.define('user', {
        id: {
            type: Sequelize.INTEGER,
            unique: 'compositeIndex',
            autoIncrement: true,
        },
        uid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        nickname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: 'compositeIndex',
        },
        mobile: {
            type: Sequelize.STRING,
            unique: 'compositeIndex',
        },
        password: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.INTEGER,
            defaultValue: 0, // 0：普通用户， 1：管理员
        },
        isLock: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    })
}

const initUserDetail = (database, Sequelize) => {
    return database.define('userDetail', {
        id: {
            type: Sequelize.INTEGER,
            unique: 'compositeIndex',
        },
        uid: {
            type: Sequelize.UUID,
            primaryKey: true,
            unique: 'compositeIndex',
        },
        nickname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: 'compositeIndex',
        },
        mobile: {
            type: Sequelize.STRING,
            unique: 'compositeIndex',
        },
        password: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.INTEGER,
            defaultValue: 0, // 0：普通用户， 1：管理员
        },
        age: {
            type: Sequelize.INTEGER,
        },
        sex: {
            type: Sequelize.INTEGER,
        },
        des: {
            type: Sequelize.STRING,
        },
        isLock: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    })
}

export default {
    initUsers,
    initUserDetail,
}