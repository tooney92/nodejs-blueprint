const config = require('better-config');

/**
 * Load an implementation of a specified DAO.
 * @param {string} daoName - the dao name
 * @param {string} daoFolder - the DAO folder
 * @returns {Object} - the DAO implemenation for the currently configured database.
 */
 const loadMongoDao = (daoName, daoFolder) => {
    const currentDataBase = config.get('application.mainDataBase');
    // console.log(`./impl/${currentDataBase}/${daoFolder}/${daoName}_dao_${currentDataBase}_impl`);
    return require(`./impl/${currentDataBase}/${daoFolder}/${daoName}_dao_${currentDataBase}_impl`);
    require('./impl/mongoDb/subUser/subUser_dao_mongoDb_impl')
  };

module.exports = {
//   loadDao,
  loadMongoDao
};
