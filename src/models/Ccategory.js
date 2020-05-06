
/**
 * 
 * @param {*} database 
 * @param {*} Sequelize 
 */
const init = (database, Sequelize) => {
    return database.define('category', {
      categoryId: {
        type: Sequelize.INTEGER,
      },
      categoryValue: {
        type: Sequelize.STRING,
        defaultValue: '全部',
      },
      categoryKey: {
        type: Sequelize.STRING,
        defaultValue: 'all',
      },
    });
  };

export default {
  init
}