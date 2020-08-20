var express = require('express');
const { route } = require('./home');
var ensureAuthenticated = require('../../auth/auth').ensureAuthenticated;
var Watch = require('../../models/watch');
var router = express.Router();

router.use(ensureAuthenticated);

router.get("/", function (req, res) {
    Watch.find({
        userID: req.user._id
    }).exec(function(err, watches){
        if (err) {
            console.log(err);
        }
        res.render('watch/watches', {watches: watches});
    });
 });

 router.get("/add", function (req, res) {
    res.render("watch/addwatch");
 });

 router.post('/add', function(req, res){
    var newWatch = new Watch({
        brand: req.body.brand,
        model: req.body.model,
        userID: req.user._id
    });

    newWatch.save(function(err, watch){
        if(err) {
            console.log(err);
        }
        res.redirect('/watches');
    });
 });

module.exports = router;