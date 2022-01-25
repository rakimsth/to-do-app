const base = require('./base');
const tags = require('./tags');
const paths = require('./paths');
const definitions = require('./definitions');

module.exports = {
  ...base,
  ...tags,
  ...paths,
  ...definitions,
};
