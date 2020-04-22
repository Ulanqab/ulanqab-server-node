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
            unique: 'compositeIndex',
        },
        password: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.INTEGER,
            defaultValue: 0, // 0：普通用户， 1：管理员
        },
        createAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        }
    })
}

export default {
    initUsers
}