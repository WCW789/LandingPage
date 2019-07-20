let path = require("path");

module.exports = function (app) {
  app.get("/link1", function (req, res) {
    console.log('We hit link1');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/gallery-round.html"), {});
  });

  app.get("/link2", function (req, res) {
    console.log('We hit link2');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/blog-list.html"), {});
  });

  app.get("/", function (req, res) {
    console.log('We hit the landing page');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/index.html"));
  });
};

