const sitemap = require("sitemap");
const fs = require("fs");
const path = require("path");

// Define the hostname and URLs for the sitemap file
const hostname = "https://www.cortexflow.org/";
const urls = [{ url: "/", changefreq: "daily", priority: 1.0 }];

// Create the sitemap instance
const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

// Define the path for the directory and the file
const directoryPath = path.join(__dirname, "../public");
const filePath = path.join(directoryPath, "sitemap.xml");

// Check if the 'public' directory exists, if not, create it
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

// Write the sitemap.xml file to the 'public' directory
try {
  fs.writeFileSync(filePath, sitemapInstance.toString());
  console.log("Sitemap successfully generated and saved to " + filePath);
} catch (error) {
  console.error("Error writing sitemap: ", error);
}
