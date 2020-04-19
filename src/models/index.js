import Sequelize from 'sequelize';
import dbConfig from '../config/db.config.js';
import model from './Post.js';

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

db.posts = model.initPosts(database, Sequelize)

export default db