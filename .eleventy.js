const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  // Configuration
  eleventyConfig.addPassthroughCopy("./src/*.js");
  eleventyConfig.setLiquidOptions({
    extname: ".html",
  });

  // eleventyConfig.addWatchTarget("./src/js/");

  // Plugins
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["./src/*.scss"],
    outputDir: "public/styles",
    sourcemaps: true,
    sassOptions: {
      file: "./src/index.scss",
    },
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
