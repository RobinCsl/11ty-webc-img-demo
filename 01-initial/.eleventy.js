const webc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(webc, {
		components: "_includes/webc/*.webc"
	});
}
