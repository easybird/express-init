import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/',
    redirectToCountries);

function redirectToCountries(req, res) {
    return res.redirect('/countries');
}

module.exports = router;
