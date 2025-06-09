export default function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/site.webmanifest");
  return {
    pathPrefix: "/",
    dir: {
      "input": "src",
      "data": "_data",
      "includes": "_includes",
      "layouts": "_layouts",
    }
  }
};
