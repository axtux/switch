// This file is here to require all of the files in this directory
// That way we just load this file instead of having to require
// so many things in our app.js

/*
require('./Challenge');
require('./User');
require('./Post');
*/

const fs = require('fs');
// __dirname is the path of the currently running file
fs.readdirSync(`${__dirname}/`).forEach((file) => {
  require(`./${file}`);
});
