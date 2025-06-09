export default function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });
  eleventyConfig.addPassthroughCopy("src/assets");
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
