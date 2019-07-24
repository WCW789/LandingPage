let path = require("path");

module.exports = function (app) {
  // app.get("/", function (req, res) {
  //   console.log('We hit the landing page');
  //   res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/index.html"));
  // });

  app.get("/", function (req, res) {
    console.log('We hit link1');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/index-circle.html"), {});
  });

  app.get("/link2", function (req, res) {
    console.log('We hit link2');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/page-contact.html"), {});
  });

  app.get("/link3", function (req, res) {
    console.log('We hit link3');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/page-thanks.html"), {});
  });
};

