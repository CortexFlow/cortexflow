const sitemap = require("sitemap");
const fs = require("fs");
const path = require("path");

// Define the hostname and URLs for the sitemap file
const hostname = "https://cortexflow.github.io/cortexflow/";
const urls = [
    { path: "/", changefreq: "daily", priority: 1.0 },
    { path: "/blog", changefreq: "daily", priority: 0.8 },
    { path: "/newsletter", changefreq: "daily", priority: 0.8 },
    { path: "/doc", changefreq: "daily", priority: 0.8 },
    { path: "/examples", changefreq: "daily", priority: 0.8 },
    { path: "/use-cases", changefreq: "daily", priority: 0.8 },
  ];

// Create the sitemap instance
const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

// Define the path for the directory and the file
const directoryPath = path.join(__dirname, '../public');
const filePath = path.join(directoryPath, 'sitemap.xml');

// Check if the 'public' directory exists, if not, create it
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

// Write the sitemap.xml file to the 'public' directory
fs.writeFileSync(filePath, sitemapInstance.toString());

console.log("Sitemap successfully generated and saved to " + filePath);
