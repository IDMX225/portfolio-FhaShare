const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    
  return {
    dir: {
      input: 'src/',
      output: 'public/',
    },
  };
};