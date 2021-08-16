
const fs = require('fs');

// dynamically loads up the files in the route directory. 
let routes = [];
fs.readdirSync(__dirname).filter((file) => file !== 'index.js').forEach((file) => {
  routes = routes.concat(require(`./${file}`));
});

module.exports = routes;