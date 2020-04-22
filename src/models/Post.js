
/**
 * 
 * @param {*} database 
 * @param {*} Sequelize 
 */
const initPosts = (database, Sequelize) => {
    return database.define("post", {
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