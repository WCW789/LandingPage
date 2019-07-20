// var authController = require('../Controllers/authcontroller');
// var path = require("path");
// var db = require("../Models");

// module.exports = function(app, passport) {

//     app.get('/signup', authController.signup);

//     app.get('/signin', authController.signin);

//     app.get('/logout', authController.logout);

//     function isLoggedIn(req, res, next) {
//       if (req.isAuthenticated()) {
//           return next();
//       } else {
//         console.log("didn't work")
//         res.redirect('/signin')
//       }
//   }

//   app.get('/checkLogin', isLoggedIn, function(req,res){
//     console.log('check @@@@@', req.user);
//     res.json({data: req.user});
//   })

//   app.get('/grabData/:ownerorsitter/:usercity', function (req, res) {
//     console.log('check !!!!!!', req.params);

//     var Sequelize = require('sequelize');
//     const Op = Sequelize.Op

//   db.AllUsers.findAll({
//     where: {
//       ownerorsitter: 
//        {
//          [Op.ne]: 
//          req.params.ownerorsitter
//        },
//        usercity: 
//        {
//          [Op.eq]: 
//          req.params.usercity
//        }
//      }
//     }).then(function(dbperson) {
//       console.log("star")
//       res.setHeader('Content-Type', 'text/html');

//         res.json({userData: dbperson})

//        })

//   })

//      app.get('/dashboard', isLoggedIn, function (req, res) {

//      console.log("apple");
//       var Sequelize = require('sequelize');
//       const Op = Sequelize.Op

//     db.AllUsers.findAll({
//       where: {
//         ownerorsitter: 
//          {
//            [Op.ne]: 
//            req.user.ownerorsitter
//          },
//          usercity: 
//          {
//            [Op.eq]: 
//            req.user.usercity
//          }
//        }
//       }).then(function(dbperson) {
//         console.log("star")
//         res.setHeader('Content-Type', 'text/html');

//           res.sendFile(path.join(__dirname, "../views/PetSitter-HTML-Working w_ tags/HTML/dashboard.html"));

//          })
//     });
//   }
