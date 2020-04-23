
/**
 * 
 * @param {*} database 
 * @param {*} Sequelize 
 */
const initPosts = (database, Sequelize) => {
    return database.define("post", {
      userId: {
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      publisher: {
        type: Sequelize.STRING
      }
    });
  };

export default {
  initPosts
}