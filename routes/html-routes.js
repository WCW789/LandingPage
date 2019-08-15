let path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log('We hit the homepage');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/index.html"), {});
  });

  app.get("/about", function (req, res) {
    console.log('We hit the about page');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/index-circle.html"), {});
  });

  app.get("/contact", function (req, res) {
    console.log('We hit the contact link');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/page-contact.html"), {});
  });

  app.get("/thankyou", function (req, res) {
    console.log('We hit the thank you link');
    res.sendFile(path.join(__dirname, "../public/appTemplate/code/dark/page-thanks.html"), {});
  });
};

