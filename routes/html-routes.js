let path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log('We hit the homepage');
    res.sendFile(path.join(__dirname, "../index.html"), {});
  });
};

