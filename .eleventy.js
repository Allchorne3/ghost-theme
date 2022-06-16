const handlebars = require('handlebars');

// This helps with date formatting. Use like: {{moment this.date format="MMMM DD, YYYY"}}
handlebars.registerHelper('moment', require('helper-moment'))

module.exports = function(eleventyConfig) {
 
  // Browser will automatically open when running dev mode
  eleventyConfig.setBrowserSyncConfig({
    open: "local",
    hot: true
  })

  // Will allow you to reverse an array of items
  eleventyConfig.addHandlebarsHelper("reverse", function (arr) {
    arr.reverse();
  }) // add {{reverse collections.post}} above the {{#each collections.post}} loop

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
  
}