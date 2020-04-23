import Sequelize from 'sequelize';
import dbConfig from '../config/db.config.js';
import modelPosts from './Post.js';
import modelUsers from './User.js';

const database = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.databaseConf = database;
db.dropRestApiTable = () => {
    db.databaseConf.sync({ force: true }).then(() => {
      console.log("restTutorial table just dropped and db re-synced.");
    });
  };

db.users = modelUsers.initUsers(database, Sequelize);
db.userDetail = modelUsers.initUserDetail(database, Sequelize);
db.posts = modelPosts.initPosts(database, Sequelize);
db.userDetail.belongsTo(db.users);
db.posts.belongsTo(db.users);

export default db