const webc = require("@11ty/eleventy-plugin-webc");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(webc, {
    components: "_includes/webc/*.webc",
  });
  eleventyConfig.addFilter("Image", async (src, alt) => {
    let metadata = await Image(src, {
      widths: [300],
      formats: ["avif", "jpeg"],
      outputDir: "_site/img/",
    });

    let imageAttributes = {
      alt: alt,
      sizes: "100vw",
      loading: "lazy",
      decoding: "async",
      "webc:raw": true,
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  });
};
