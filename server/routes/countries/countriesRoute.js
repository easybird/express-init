import express from "express";
import getCountries from "../../middleware/service/countries/getCountries";
import getCountry from "../../middleware/service/countries/getCountry";

const router = express.Router();

router.get('/',
    getCountries,
    renderCountriesOverviewPage);

router.get('/:country',
    handleGetCountryRequestParams,
    getCountry,
    renderCountryPage);

function renderCountriesOverviewPage(req, res) {
    res.render('countriesPage', {
        title: 'All countries of the world',
        countries: req.countries
    });
}

function handleGetCountryRequestParams(req, res, next) {
    req.getCountry = {countryName: req.params.country};

    return next();
}

function renderCountryPage(req, res) {
    res.render('countryPage', {
        country: req.country
    });
}

module.exports = router;
