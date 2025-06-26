const fs = require("fs");
const yaml = require("js-yaml");
const pluginRSS = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require("eleventy-plugin-toc");
const markdownItAnchor = require("markdown-it-anchor");
const moment = require("moment");
moment.locale("en");

module.exports = function (eleventyConfig) {
  // Add YAML support
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Collections for translated content
  eleventyConfig.addCollection("translatedPosts", (collection) => {
    return collection.getFilteredByGlob("./src/*/*/index.md");
  });

  // Collection for posts by language
  eleventyConfig.addCollection("postsByLanguage", (collection) => {
    const postsByLang = {};
    const translatedPosts = collection.getFilteredByGlob("./src/*/*/index.md");
    
    translatedPosts.forEach(post => {
      const pathParts = post.inputPath.split('/');
      const lang = pathParts[pathParts.length - 3]; // More reliable way to get language
      
      // Skip course directories
      if (lang === 'courses') return;
      
      if (!postsByLang[lang]) {
        postsByLang[lang] = [];
      }
      postsByLang[lang].push(post);
    });
    
    return postsByLang;
  });

  // Debug filter to inspect data
  eleventyConfig.addFilter("debug", (obj) => {
    return JSON.stringify(obj, null, 2);
  });

  // Filter to get posts by language
  eleventyConfig.addFilter("getPostsByLanguage", (posts, language) => {
    return posts.filter(post => post.inputPath.includes(`/src/${language}/`));
  });

  // allows templates to add additional data
  eleventyConfig.setDataDeepMerge(true);

  // copy static files directly, with same directory structure
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/javascript");
  eleventyConfig.addPassthroughCopy("src/cheatsheets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/crossdomain.xml");
  eleventyConfig.addPassthroughCopy("src/humans.txt");
  eleventyConfig.addPassthroughCopy("src/googlefbd8416db30a21a8.html");

  // parse excerpts on posts
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
    excerpt_alias: "post_excerpt",
  });

  // filter to return a date as ISO string objects
  eleventyConfig.addFilter("dateISO", (date) => {
    return moment(date).toISOString();
  });

  // filter to return a date for prettier display. Uses UTC to avoid timezone differences
  eleventyConfig.addFilter("datePretty", (date) => {
    return moment(date).utc().format("LL");
  });

  // filter to format date as in Jekyll (for URL compatibility)
  eleventyConfig.addFilter("dateYear", (date) => {
    return moment(date).format("YYYY");
  });

  eleventyConfig.addFilter("dateMonth", (date) => {
    return moment(date).format("MM");
  });

  eleventyConfig.addFilter("dateDay", (date) => {
    return moment(date).format("DD");
  });

  eleventyConfig.addFilter("jsonStringify", (obj) => {
    return JSON.stringify(obj);
  });

  // filter to sort a list of posts by date desc
  eleventyConfig.addFilter("sortDesc", (posts) => {
    posts.sort(function (a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    return posts;
  });

  // Cache busting filter
  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    const urlPrefix = __dirname + "/src/";
    const relativeUrl =
      urlPart.charAt(0) == "/"
        ? urlPrefix + urlPart.substring(1)
        : urlPrefix + urlPart;

    try {
      const fileStats = fs.statSync(relativeUrl);
      const dateTimeModified = new Date(fileStats.mtime).getTime();
      params.set("v", dateTimeModified);
    } catch (error) {
      console.log(error);
    }
    return `${urlPart}?${params}`;
  });

  // create custom collection of posts
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("./src/posts/*.md").sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });

  // Pagination for index page
  eleventyConfig.addCollection("postsForPagination", (collection) => {
    return collection.getFilteredByGlob("./src/posts/*.md").sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });

  // IDs in headings
  const markdownIt = require("markdown-it");

  // create a new markdown-it instance with the plugin
  const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);

  // replace the default markdown-it instance
  eleventyConfig.setLibrary("md", markdownLib);

  // add plugins
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3"],
    wrapper: "div",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "html", "njk", "xml"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
